module.exports = {
  title: "@hisasann日記", // populated into `publication.json`, default to `title` of the first entry or `name` in `package.json`.
  author: "hisasann <hisasann25@gmail.com>", // default to `author` in `package.json` or undefined.
  language: "ja", // default to undefined.
  size: "A5", // paper size.
  theme: "@vivliostyle/theme-bunko", // .css or local dir or npm package. default to undefined.
  entry: [
    "cover.md",
    {
      path: 'toc.md',
      rel: 'contents',
    },
    "prologue.md",
    "2021-08.md",
    "2021-09.md",
    "2021-10.md",
    "2021-11.md",
    "2021-12.md",
    "2022-01.md",
    "2022-02.md",
    "2022-03.md",
    "epilogue.md",
    // {
    //   path: 'epigraph.md',
    //   title: 'Epigraph', // title can be overwritten (entry > file),
    //   theme: '@vivliostyle/theme-whatever', // theme can be set individually. default to the root `theme`.
    // },
    // 'glossary.html', // html can be passed.
  ], // `entry` can be `string` or `object` if there's only single markdown file.
  entryContext: "./manuscripts", // default to '.' (relative to `vivliostyle.config.js`).
  output: [
    // path to generate draft file(s). default to '{title}.pdf'
    "./output.pdf", // the output format will be inferred from the name.
    {
      path: "./book",
      format: "webpub",
    },
  ],
  workspaceDir: '.vivliostyle', // directory which is saved intermediate files.
  toc: true, // 目次を作成するかどうか
  tocTitle: 'もくじ',
  cover: './cover.jpg', // cover image. default to undefined.
  // vfm: { // options of VFM processor
  //   hardLineBreaks: true, // converts line breaks of VFM to <br> tags. default to 'false'.
  //   disableFormatHtml: true, // disables HTML formatting. default to 'false'.
  // },
};
