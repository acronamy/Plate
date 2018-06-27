import { PlateModule } from '@plate/core';

import { RootMount } from './root.mount';
import { AuthMount } from './mounts/auth/auth.mount';

function SystemPagesModule(){}

@PlateModule({
    declarations:[
        RootMount,
        AuthMount
    ],
    base: RootMount,
    host: "localhost",
    port: 4040,
    imports:[
        SystemPagesModule,
    ]
})
export class RootModule{}