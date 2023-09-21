import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ReasonForUpdateEntity } from './entities/reason-for-update.entity';
import { ReasonForUpdateService } from './reason-for-update.service';

@Crud({
  model: {
    type: ReasonForUpdateEntity
  },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('reason-for-update')
export class ReasonForUpdateController {
  constructor(public service: ReasonForUpdateService) {}
}
