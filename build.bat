cd code && ^
npm run deploy:prod && ^
cd .. && ^
cd react && ^
npm run build && ^
cd .. && ^
bundle exec jekyll serve