# Architecture

Vite, React and strict TypeScript power a single-page brand experience. Organisation, programme, navigation and contact content live in `src/data`; components compose the hero, about narrative, sticky programme sequence, accountability, involvement and footer sections. Intersection Observer drives one-time programme reveals and active navigation without a motion library.

The build is fully static and deployable to Vercel or another static host. A future CMS can replace the data modules without redesigning the section components. The prior Next.js implementation remains in source history but is excluded from the active Vite build.
