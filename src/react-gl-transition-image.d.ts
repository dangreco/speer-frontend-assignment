declare module "react-gl-transition-image" {



    export default ReactGlTransitionImage;

    
    export {
        blobbyTransition,
        glitchTransition,
        polkaTransition,
        noiseSwirlsTransition,
        blurTransition,
        waterTransition,
        randomSquaresTransition,
    }

    type GLTransition = string;

    declare const blobbyTransition: GLTransition;
    declare const glitchTransition: GLTransition;
    declare const polkaTransition: GLTransition;
    declare const noiseSwirlsTransition: GLTransition;
    declare const blurTransition: GLTransition;
    declare const waterTransition: GLTransition;
    declare const randomSquaresTransition: GLTransition;

    declare const ReactGlTransitionImage: React.ForwardRefExoticComponent<{
        ref: Ref<unknown>;
        src: string | undefined;
        progress: number;
        transition: string;
    } & React.RefAttributes<unknown>>;

    import React from 'react';

}
