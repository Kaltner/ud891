## Skip links
Used to move directly to the content of the page instead of navigating through all the first elements of the page (Like menus)

Note that the `tabindex="-1" is for older browsers
__Example:__
```html
    <a href="#maincontent" class="skip-link">Skip to main content</a>
    <main id="maincontent" tabindex="-1">
        ...
    </main>
```

__For older browsers:__
```css
.skip-link{
    ...
    position:absolute;
    top:-40px;
}

.skip-link:focus{
    top:0;
}
```

## Focus in complex components

[ARIA Design Patterns](https://www.w3.org/TR/wai-aria-practices/) have all the keyboard support that each component and element on HTML provides for accessibility.

When making custom components, think about what is expected for your component to do compared to HTML elements and replicate those on your custom components.

### Roving focus

It's a technique where you can set on a custom component the same pattern of a checked box.

__Before:__
```html
    <li tabindex="0" checked>
    <li tabindex="-1">
    <li tabindex="-1">
    <li tabindex="-1">
    <li tabindex="-1">
```

__After:__
```html
    <li tabindex="-1">
    <li tabindex="0" checked>
    <li tabindex="-1">
    <li tabindex="-1">
    <li tabindex="-1">
```

## Offscreen Content

If you need to remove the ability to focus some offscreen element, you will need to hide it using CSS.

## Modals and Keyboard Traps

[Definition](http://webaim.org/standards/wcag/checklist#sc2.1.2)

This behaviour is welcome on modals for instance, where you want to trap the keyboard inside a modal.

To do that you will need to:
1. Save the previous focused element 
1. Close the modal when the user clicks outside, press a HTML button or press a keyboard button
1. Figure out what is the first element of the modal
1. Figure out what is the last element.
1. Loop the user when they reach the first/last element and send them to the end/beginning of the tab
