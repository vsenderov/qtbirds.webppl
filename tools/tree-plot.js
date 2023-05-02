const d3 = require('d3');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const { document } = (new JSDOM('')).window;
global.document = document;

let rawdata = fs.readFileSync( process.argv[2]);
const phyloTree = JSON.parse(rawdata);

function drawTree(treeData) {
  const width = 800;
  const height = 800;

  const svg = d3.select(document.body)
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  const root = d3.hierarchy(treeData);

  const treeLayout = d3.tree()
    .size([height, width - 200]);

  treeLayout(root);

  const linkGenerator = d3.linkHorizontal()
    .x(d => d.y)
    .y(d => d.x);

  svg.selectAll('path')
    .data(root.links())
    .enter()
    .append('path')
    .attr('d', linkGenerator)
    .style('fill', 'none')
    .style('stroke', '#000')
    .style('stroke-width', '2');

  svg.selectAll('circle')
    .data(root.descendants())
    .enter()
    .append('circle')
    .attr('cx', d => d.y)
    .attr('cy', d => d.x)
    .attr('r', 5)
    .style('fill', d => d.data.character === 'black' ? 'black' : 'white')
    .style('stroke', 'black');

  svg.selectAll('text')
    .data(root.descendants())
    .enter()
    .append('text')
    .attr('x', d => d.y + 10)
    .attr('y', d => d.x - 5)
    .text(d => d.data.sequence);
}

drawTree(phyloTree.value);
