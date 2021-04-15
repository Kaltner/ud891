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