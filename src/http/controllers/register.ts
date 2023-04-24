import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
// import { registerUseCase } from '@/use-cases/register'
import { RegisterUseCase } from '@/use-cases/register'
// import { InMemoryUsersRepository } from '@/repositories/in-memory-users-repository'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists-error'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { name, email, password } = registerBodySchema.parse(request.body)

  try {
    // const usersRepository = new InMemoryUsersRepository()
    const usersRepository = new PrismaUsersRepository()
    const registerUseCase = new RegisterUseCase(usersRepository)

    await registerUseCase.execute({
      name,
      email,
      password,
    })
  } catch (err) {
    // return reply.status(409).send()
    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: err.message })
    }

    return reply.status(201).send() // TODO: fix me
  }

  return reply.status(201).send()
}
