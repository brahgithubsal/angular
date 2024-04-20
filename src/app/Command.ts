// command.interface.ts

import { Client } from './Client';
import { ServiceModel } from './service';
import { UserModel } from './UserModal';

export interface Command {
  id: number;
  client: Client;
  service: ServiceModel;
  user: UserModel;
  name:ServiceModel;
  Name:Client
}
