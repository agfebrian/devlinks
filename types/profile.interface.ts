import type Dropdown from "./dropdown.interface";

export interface MyProfile {
  firstName: string;
  lastName: string;
  email: string;
  avatar: File;
  previewAvatar: string;
}

export interface Link {
  platform: Dropdown;
  link: string;
}
