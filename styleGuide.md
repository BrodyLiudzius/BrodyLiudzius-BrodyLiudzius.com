# HTML Style Guide

This document will lay out preferred practices for the development of this web page (www.brodyliudzius.com). They are guidelines and can be broken if deemed necessary by the developer. This document should be reviewed periodically and newly-made documents checked for conformity to it. This is a living document and will be updated as is deemed necessary.

## General Guidelines
- Use `camelCase` names for things. Consistent use of one system makes it easy to know how to capitalize names of files, class attributes, variables, etc.
- Tags can be placed in comments to signal information about a file or code. All files in a directory can then be easily searched for a given tag. These tags include—but are not necessarily limited to—
	- `#toDo` - There is a to do list within the file
	- `#livingDocument` - The document or section of the document requires occasional review to update the information within

## Document Organization

- HTML is for content only, not presentation or behavior. Presentation of the document should be kept to a separate CSS file and behaviors kept to javascript files.
- CSS should not appear in the HTML document, not even in the `style` attribute of a tag. Instead, the `class` attribute should be used to attach presentation information to a specific tag. This also makes the styling reusable for other tags and/or documents.
- Javascript should not appear within the HTML document. It should be defined in a separate javscript file and interface with elements by tag, class, id, or other HTML means.

## HTML Guidelines
- Don't forget `<!DOCTYPE html>` (`doctype html` in pug) at the top of the document.
- Semantic tags are always preferred over `div` tags! They make the intent of an HTML block far more understandable. `div` is reserved for when no other tag is suitable.
- It should always be preferred to explicitly type unicode characters like bullet points in the source file instead of HTML character entitites. This makes the HTML file more readable. Exceptions to this include things like `&nbsp` which is more readable than the actual whitespace character itself.
- It is preferred that unnecessary whitespace in tags and attributes be removed. For example, `<h1 class = "title "> ` should be `<h1 class="title">`
- The html root element should contain a `lang` attribute (i.e. `<html lang="en">`) that is a valid ISO language code. Search engines use it to find language-relevant results, and translation tools and text-readers can use it for increased page accessibility. Any tags in the page that contain a language other than the `html` tag's `lang` attribute should have a `lang` attribute of their own.
- The `charset` metadata must be fully included within the first 1024 bytes of the HTML file.
- Time elements should have a `datetime` attribute to make them more machine-readable.
- Alternate stylesheets (defined by the `link` tag having the attribute `rel="alternate stylesheet"`) should have a human-readable and self-explanatory `title` attribute.
- If literal computer code is part of the content of a web page, then the code should be contained within a `code` tag inside a `pre` tag. The language of the code should be specified using the `class` attribute and should be the the word language, followed by a hyphen, and then the language's name in lower-case as recommended by the HTML specifications. For example: `<pre><code class="language-javascript">alert()</code></pre>`.
- Images should always have an `alt` attribute.

## CSS Guidelines
- Use class selectors, never id selectors. Class selectors are more reusable