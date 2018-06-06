import { PlateModule } from '@plate/core';

import { RootMount } from './root.mount';

function SystemPagesModule(){}

@PlateModule({
    declarations:[
        RootMount
    ],
    host:'localhost',
    port:4040,
    imports:[
        SystemPagesModule,
    ]
})
export class RootModule{}