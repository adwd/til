/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import {
  MatchResults,
} from '@stencil/router';


export namespace Components {

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppProfile {
    'match': MatchResults;
  }
  interface AppProfileAttributes extends StencilHTMLAttributes {
    'match'?: MatchResults;
  }

  interface AppProfiles {}
  interface AppProfilesAttributes extends StencilHTMLAttributes {}

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface NotFound {}
  interface NotFoundAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AppHome': Components.AppHome;
    'AppProfile': Components.AppProfile;
    'AppProfiles': Components.AppProfiles;
    'AppRoot': Components.AppRoot;
    'NotFound': Components.NotFound;
  }

  interface StencilIntrinsicElements {
    'app-home': Components.AppHomeAttributes;
    'app-profile': Components.AppProfileAttributes;
    'app-profiles': Components.AppProfilesAttributes;
    'app-root': Components.AppRootAttributes;
    'not-found': Components.NotFoundAttributes;
  }


  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppProfilesElement extends Components.AppProfiles, HTMLStencilElement {}
  var HTMLAppProfilesElement: {
    prototype: HTMLAppProfilesElement;
    new (): HTMLAppProfilesElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLNotFoundElement extends Components.NotFound, HTMLStencilElement {}
  var HTMLNotFoundElement: {
    prototype: HTMLNotFoundElement;
    new (): HTMLNotFoundElement;
  };

  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement
    'app-profile': HTMLAppProfileElement
    'app-profiles': HTMLAppProfilesElement
    'app-root': HTMLAppRootElement
    'not-found': HTMLNotFoundElement
  }

  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-profile': HTMLAppProfileElement;
    'app-profiles': HTMLAppProfilesElement;
    'app-root': HTMLAppRootElement;
    'not-found': HTMLNotFoundElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
