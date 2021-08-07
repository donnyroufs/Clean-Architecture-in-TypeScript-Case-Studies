import { Module } from '@nestjs/common';

import { UserRepositoryToken } from '@application/tokens/user-repository.token';
import { UserRepository } from '@infra/user/user.repository';
import { UserMapperToken } from '@application/tokens/user-mapper.token';
import { UserMapper } from './user/user.mapper';
import { DBService } from './prisma/db.service';
import { DBContext } from './prisma/db.context';

@Module({
  providers: [
    {
      provide: UserRepositoryToken,
      useClass: UserRepository,
    },
    {
      provide: UserMapperToken,
      useClass: UserMapper,
    },
    DBService,
    DBContext,
  ],
  exports: [
    {
      provide: UserRepositoryToken,
      useClass: UserRepository,
    },
    {
      provide: UserMapperToken,
      useClass: UserMapper,
    },
  ],
})
export class InfraModule {}
