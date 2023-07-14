import { PrismUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { AuthenticateUseCase } from '../authenticate'

export function makeAuthenticateUseCase() {
  const prismUsersRepository = new PrismUsersRepository()
  const authenticateUseCase = new AuthenticateUseCase(prismUsersRepository)

  return authenticateUseCase
}
