import { prisma } from '@/lib/prisma'
// import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists-error'
// import { User } from '@prisma/client'
import { hash } from 'bcryptjs'

interface RegisterUseCaseRequest {
  name: string
  email: string
  password: string
}

// interface RegisterUseCaseResponse {
//   user: User
// }

export class RegisterUseCase {
  constructor(private usersRepository: any) {}

  // async execute({
  //   name,
  //   email,
  //   password,
  // }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
  //   const password_hash = await hash(password, 6)

  async execute({ name, email, password }: RegisterUseCaseRequest) {
    const password_hash = await hash(password, 6)

    // const userWithSameEmail = await this.usersRepository.findByEmail(email)

    // if (userWithSameEmail) {
    //   throw new UserAlreadyExistsError()
    // }

    const userWithSameEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (userWithSameEmail) {
      throw new Error('E-mail already exists.')
    }

    // const user = await this.usersRepository.create({
    //   name,
    //   email,
    //   password_hash,
    // })

    await this.usersRepository.create({
      name,
      email,
      password_hash,
    })

    // TODO: return user
    // return {
    //   user,
    // }
  }
}
