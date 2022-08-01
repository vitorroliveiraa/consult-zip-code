import { v4 as uuidV4 } from 'uuid';

export class UsersTokens {
  id: string;
  refresh_token: string;
  user_id: string;
  expires_date: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
