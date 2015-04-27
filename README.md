# ng-spin
A simple AngularJS directive to display a spinner, using [Spin.js](http://fgnass.github.io/spin.js/)

## Usage

First, you must make sure the Spinner object from [Spin.js](http://fgnass.github.io/spin.js/) is available, either by including its script file or importing it as a module. Then, include the directive in your Angular project.

There are a couple of other directives wrapping this same library. This one is slightly different in that it uses an custom attribute to activate and deactivate the spinner, as opposed to a method call. To create a spinner in your Angular template, use the following syntax:

```HTML
 <div ng-spin spinning="expression">...</div>
```

Where `expression` is a JavaScript expression accessible from within the current scope. While it evaluates to true,
the spinner will display.

You can also pass initialization options into the spinner object via the `ngSpinOpts` attribute. For a comprehensive list of available options, see the [Spin.js site.](http://fgnass.github.io/spin.js/)
 
