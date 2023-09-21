import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedChildSchoolEntity } from './entities/selected-child-school.entity';
import { SelectedChildSchoolService } from './selected-child-school.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedChildSchoolEntity])],
  providers: [SelectedChildSchoolService],
  exports: [SelectedChildSchoolService]
})
export class SelectedChildSchoolModule { }
