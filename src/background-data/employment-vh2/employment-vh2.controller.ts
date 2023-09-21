import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { EmploymentVh2Service } from './employment-vh2.service';
import { EmploymentVh2Entity } from './entities/employment-vh2.entity';

@Crud({
  model: {
    type: EmploymentVh2Entity
  },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('employment-vh2')
export class EmploymentVh2Controller {
  constructor(public service: EmploymentVh2Service) {}
}
