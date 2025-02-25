import $ from "jquery";
import * as tippy from "tippy.js";

export function any_active() {
    // Checks if there are any interactive tippy instances (= popovers) present.
    const $tippy_instances = $("[data-tippy-root]");
    // Tippy instances with `interactive: true` are popovers by definition.
    const num_interactive_instances = $tippy_instances.filter(
        (_i, elt) => elt._tippy?.props.interactive === true,
    ).length;
    return Boolean(num_interactive_instances);
}

export function hide_all() {
    // Hides all tippy instances (tooltips and popovers).
    tippy.hideAll();
}
