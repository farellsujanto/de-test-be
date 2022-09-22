import { Min } from 'class-validator';
import { SetOwnerAsMasterInput } from '../../graphql.schema';

export class SetOwnnerAsMasterDto extends SetOwnerAsMasterInput {
  @Min(1)
  id: number;
}
