# Steps for Preparing a Release

1. Update the `version` field in `package.json`:

   ```json
   {
     "version": "1.0.0"
   }
   ```

2. Build the package (creates package files in `/dist`):

   `pnpm build`

3. Commit the changes and push to main:

   `git commit -am "build: release version v1.0.0"`

   `git push origin main`

4. Tag the release and push the tag:

   `git tag v1.0.0`

   `git push origin --tags`

5. Update the changelog for the release:

   `pnpm changelog`

   `git commit -am "build: commit changelog for version v1.0.0"`

   `git push origin main`

6. Login to the npm website, then publish the package to npm:

   `npm login`

   `npm publish`
