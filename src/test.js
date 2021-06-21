import { tsv } from "d3-request";
import { SentenTreeBuilder, SentenTreeVis, tokenizer } from "./main.js";

const data = [];
console.log("hello");

tsv("data/demo.tsv", (error, rawdata) => {
  console.log(rawdata);
  const data = rawdata.map((d) => Object.assign({}, d, { count: +d.count }));
  console.log(data);
  console.time("Build model");
  const model = new SentenTreeBuilder()
    .tokenize(tokenizer.tokenizeBySpace)
    .transformToken((token) => (/score(d|s)?/.test(token) ? "score" : token))
    .buildModel(data);
  console.timeEnd("Build model");
});
