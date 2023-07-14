import { PrismUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { RegisterUseCase } from '../register'

export function makeRegisterUseCase() {
  const prismUsersRepository = new PrismUsersRepository()
  const registerUseCase = new RegisterUseCase(prismUsersRepository)

  return registerUseCase
}
