# Go Live Checklist

## 1. Front end checklist

### Assets
- [ ] Search sources for `http://`. Replace by `https://`
- [ ] Lint (s)css sources
- [ ] Webfonts: is the live domain configured in services like Typekit, Fonts.com etc.?
- [ ] Is the browserlist properly configured for autoprefixer and babel-preset-env?
- [ ] When using PurgeCSS: check if layout is preserved.
- [ ] ...

### Scripts
- [ ] Is `yarn.lock` present?
- [ ] Check JS lint errors. Remove all `console.log` lines in scripts
- [ ] Check for console errors
- [ ] ...

### Page weight
- [ ] Evaluate total weight of at least homepage
- [ ] Open Inspector network/timeline tab to identify heavy assets
- [ ] Check if heavy assets are cached
- [ ] ...

### Audits
- [ ] Use Lighthouse (in incognito mode) and perform a mobile audit (with throttling) to fix common problems.
- [ ] Repeat with a desktop audit.
- [ ] ...

## Check content (with an open console)
- [ ] Are all strings / images present (and translated)?
- [ ] Does menu/submenu have a correct active state on every page?
- [ ] Are 404, 500 and 503 pages provided? Do they provide useful content like 'back to home', search or a navigation tree?
- [ ] Check all pages for n+1 problems
- [ ] ...

### Meta
- [ ] Check page titles / descriptions
- [ ] Does Favicon load? Pin the tab to check pinned icon
- [ ] ...

### Components
- [ ] 3rd Party Integrations
	- [ ] API key needed/configured?
	- [ ] Correct version selected
- [ ] Ensure right Environment is set
- [ ] Forms: fill out with wrong/right values
- [ ] Check structured data https://search.google.com/test/rich-results
- [ ] ...

## 2. Back end checklist
- [ ] Remove unused modules
- [ ] Create a new admin and try to log in
- [ ] Try the password reset flow for existing user
- [ ] Verify all e-mail recipients are correct
- [ ] ...

## 3. DNS & Services
- [ ] Add redirects from old to new pages if necessary.
- [ ] Check your hostfile to make sure you're looking at the live site
- [ ] Try visiting `www` domain, should redirect to `non-www`
- [ ] Try out visiting `http`, should redirect to `https`
- [ ] Verify that all http status codes are ok
- [ ] (If Public!) Verify that indexing is not prohibited with `x-robots-tag: none` by checking `curl -I https://url | grep 'x-robots-tag'`.
- [ ] Check dns propagation with https://www.whatsmydns.net/
- [ ] ...

### Github
- [ ] Remove stale branches
- [ ] ...
