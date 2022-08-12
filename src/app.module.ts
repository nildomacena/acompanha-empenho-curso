import { Module } from '@nestjs/common';
import { EmpenhosModule } from './empenhos/empenhos.module';
@Module({
  imports: [EmpenhosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
