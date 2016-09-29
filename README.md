#Apigee Icons

###This library is a self-contained tool for generating icon fonts used by the Apigee platform from a source Sketch document.


1. Install the Grunt CLI:

        $ npm install -g grunt-cli

2. Install dependent packages:

        $ npm install

3. Ensure you have the latest version of Sketch installed – Version 40.1 (33804); this tool is dependent on a Sketch CLI tool that is not included in this repo. If you do not have a license for Sketch, the demo version will suffice.

4. Generate icon font assets:

        // `grunt all` will export from sketch and generate icon fonts
        // `grunt font-only` will regenerate fonts from existing /svg folder
        // For example:

        $ grunt all --src=apigee.sketch --dst ../

---

> **Important**: The copy of `apigee.sketch` in this repo _may or may not_ be the most recent version of the file. If you're publishing a new release, retrieve the latest copy from `Apigee Dragonfly Dropbox/Apigee Dragonfly Team Folder/Assets/Icons`, generate the font assets, then visually QA each icon using the preview HTML file **before** submitting a PR.

