#Apigee Icons

###Disclaimer

Use of these icon fonts is intended for use with internal Apigee build systems, and is not intended for public consumption, distribution, or sale. You may not sub-license, re-sell, rent, lend, assign, gift or otherwise transfer or distribute the icons or the rights granted under this license (even for free).

###Icons Index

You can preview available icons from here: https://apigee-internal.github.io/apigee-icons-build/. This is a preview of the *latest* commit and may not accurately reflect previous versions of this icons repo.

###Icon requests

Please open an issue in this repo and use the `:new-icon-request:` tag.

###Usage

Include source font files and CSS in your project, then add an `@font-face` declaration to your CSS, similar to the following:

```
@font-face {
	font-family:"apigee-icons";
	src:url("../fonts/apigee-icons.eot?fc3861cc8bd5f57c71b3490936320c5a");
	src:url("../fonts/apigee-icons.eot?#iefix") format("embedded-opentype"),
		url("../fonts/apigee-icons.woff?fc3861cc8bd5f57c71b3490936320c5a") format("woff"),
		url("../fonts/apigee-icons.ttf?fc3861cc8bd5f57c71b3490936320c5a") format("truetype");
	font-weight:normal;
	font-style:normal;
}
```

Then select an icon from the icons index page, and include the appropriate markup where you need to use the icon:

```
<i class="apic-icon apic-name"></i>
```

###Support

This is an open-source project of the Apigee Corporation. It is not covered by Apigee support contracts. However, we will support you as best we can. For help, please open an issue in this GitHub project. You are also always welcome to submit a pull request.

- - -

###License

Copyright 2016 Apigee Corporation

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
