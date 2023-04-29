import { prisma } from '@/lib/prisma'
// import { Prisma } from '@prisma/client'
import { Prisma, User } from '@prisma/client'

export class PrismaUsersRepository {
  findById(id: string): Promise<User | null> {
    throw new Error('Method not implemented.')
  }

  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    })
    return user
  }
}
