/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface BorcButton {
    }
    interface BorcSelect {
    }
}
declare global {
    interface HTMLBorcButtonElement extends Components.BorcButton, HTMLStencilElement {
    }
    var HTMLBorcButtonElement: {
        prototype: HTMLBorcButtonElement;
        new (): HTMLBorcButtonElement;
    };
    interface HTMLBorcSelectElement extends Components.BorcSelect, HTMLStencilElement {
    }
    var HTMLBorcSelectElement: {
        prototype: HTMLBorcSelectElement;
        new (): HTMLBorcSelectElement;
    };
    interface HTMLElementTagNameMap {
        "borc-button": HTMLBorcButtonElement;
        "borc-select": HTMLBorcSelectElement;
    }
}
declare namespace LocalJSX {
    interface BorcButton {
    }
    interface BorcSelect {
    }
    interface IntrinsicElements {
        "borc-button": BorcButton;
        "borc-select": BorcSelect;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "borc-button": LocalJSX.BorcButton & JSXBase.HTMLAttributes<HTMLBorcButtonElement>;
            "borc-select": LocalJSX.BorcSelect & JSXBase.HTMLAttributes<HTMLBorcSelectElement>;
        }
    }
}
