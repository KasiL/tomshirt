var shirt = $(".shirt");
var backgrounds = new Array(
	"url(https://www.transparenttextures.com/patterns/3px-tile.png)",
	"url(https://www.transparenttextures.com/patterns/45-degree-fabric-dark.png)",
	"url(https://www.transparenttextures.com/patterns/45-degree-fabric-light.png)",
	"url(https://www.transparenttextures.com/patterns/60-lines.png)",
	"url(https://www.transparenttextures.com/patterns/absurdity.png)",
	"url(https://www.transparenttextures.com/patterns/ag-square.png)",
	"url(https://www.transparenttextures.com/patterns/always-grey.png)",
	"url(https://www.transparenttextures.com/patterns/arabesque.png)",
	"url(https://www.transparenttextures.com/patterns/arches.png)",
	"url(https://www.transparenttextures.com/patterns/argyle.png)",
	"url(https://www.transparenttextures.com/patterns/asfalt-dark.png)",
	"url(https://www.transparenttextures.com/patterns/asfalt-light.png)",
	"url(https://www.transparenttextures.com/patterns/assault.png)",
	"url(https://www.transparenttextures.com/patterns/axiom-pattern.png)",
	"url(https://www.transparenttextures.com/patterns/az-subtle.png)",
	"url(https://www.transparenttextures.com/patterns/back-pattern.png)",
	"url(https://www.transparenttextures.com/patterns/basketball.png)",
	"url(https://www.transparenttextures.com/patterns/batthern.png)",
	"url(https://www.transparenttextures.com/patterns/bedge-grunge.png)",
	"url(https://www.transparenttextures.com/patterns/beige-paper.png)",
	"url(https://www.transparenttextures.com/patterns/billie-holiday.png)",
	"url(https://www.transparenttextures.com/patterns/binding-dark.png)",
	"url(https://www.transparenttextures.com/patterns/binding-light.png)",
	"url(https://www.transparenttextures.com/patterns/black-felt.png)",
	"url(https://www.transparenttextures.com/patterns/black-linen.png)",
	"url(https://www.transparenttextures.com/patterns/black-linen-2.png)",
	"url(https://www.transparenttextures.com/patterns/black-mamba.png)",
	"url(https://www.transparenttextures.com/patterns/black-orchid.png)",
	"url(https://www.transparenttextures.com/patterns/black-paper.png)",
	"url(https://www.transparenttextures.com/patterns/black-scales.png)",
	"url(https://www.transparenttextures.com/patterns/black-thread.png)",
	"url(https://www.transparenttextures.com/patterns/black-thread-light.png)",
	"url(https://www.transparenttextures.com/patterns/black-twill.png)",
	"url(https://www.transparenttextures.com/patterns/blizzard.png)",
	"url(https://www.transparenttextures.com/patterns/blu-stripes.png)",
	"url(https://www.transparenttextures.com/patterns/bo-play.png)",
	"url(https://www.transparenttextures.com/patterns/bright-squares.png)",
	"url(https://www.transparenttextures.com/patterns/brilliant.png)",
	"url(https://www.transparenttextures.com/patterns/broken-noise.png)",
	"url(https://www.transparenttextures.com/patterns/brushed-alum.png)",
	"url(https://www.transparenttextures.com/patterns/brushed-alum-dark.png)",
	"url(https://www.transparenttextures.com/patterns/buried.png)",
	"url(https://www.transparenttextures.com/patterns/candyhole.png)",
	"url(https://www.transparenttextures.com/patterns/carbon-fibre.png)",
	"url(https://www.transparenttextures.com/patterns/carbon-fibre-big.png)",
	"url(https://www.transparenttextures.com/patterns/carbon-fibre-v2.png)",
	"url(https://www.transparenttextures.com/patterns/cardboard.png)",
	"url(https://www.transparenttextures.com/patterns/cardboard-flat.png)",
	"url(https://www.transparenttextures.com/patterns/cartographer.png)",
	"url(https://www.transparenttextures.com/patterns/checkered-light-emboss.png)",
	"url(https://www.transparenttextures.com/patterns/checkered-pattern.png)",
	"url(https://www.transparenttextures.com/patterns/church.png)",
	"url(https://www.transparenttextures.com/patterns/circles.png)",
	"url(https://www.transparenttextures.com/patterns/classy-fabric.png)",
	"url(https://www.transparenttextures.com/patterns/clean-gray-paper.png)",
	"url(https://www.transparenttextures.com/patterns/clean-textile.png)",
	"url(https://www.transparenttextures.com/patterns/climpek.png)",
	"url(https://www.transparenttextures.com/patterns/cloth-alike.png)",
	"url(https://www.transparenttextures.com/patterns/concrete-wall.png)",
	"url(https://www.transparenttextures.com/patterns/concrete-wall-2.png)",
	"url(https://www.transparenttextures.com/patterns/concrete-wall-3.png)",
	"url(https://www.transparenttextures.com/patterns/connected.png)",
	"url(https://www.transparenttextures.com/patterns/corrugation.png)",
	"url(https://www.transparenttextures.com/patterns/cream-dust.png)",
	"url(https://www.transparenttextures.com/patterns/cream-paper.png)",
	"url(https://www.transparenttextures.com/patterns/cream-pixels.png)",
	"url(https://www.transparenttextures.com/patterns/crisp-paper-ruffles.png)",
	"url(https://www.transparenttextures.com/patterns/crissxcross.png)",
	"url(https://www.transparenttextures.com/patterns/cross-scratches.png)",
	"url(https://www.transparenttextures.com/patterns/cross-stripes.png)",
	"url(https://www.transparenttextures.com/patterns/crossword.png)",
	"url(https://www.transparenttextures.com/patterns/cubes.png)",
	"url(https://www.transparenttextures.com/patterns/cutcube.png)",
	"url(https://www.transparenttextures.com/patterns/dark-circles.png)",
	"url(https://www.transparenttextures.com/patterns/dark-denim.png)",
	"url(https://www.transparenttextures.com/patterns/dark-denim-3.png)",
	"url(https://www.transparenttextures.com/patterns/dark-dot.png)",
	"url(https://www.transparenttextures.com/patterns/dark-dotted-2.png)",
	"url(https://www.transparenttextures.com/patterns/dark-exa.png)",
	"url(https://www.transparenttextures.com/patterns/dark-fish-skin.png)",
	"url(https://www.transparenttextures.com/patterns/dark-geometric.png)",
	"url(https://www.transparenttextures.com/patterns/dark-leather.png)",
	"url(https://www.transparenttextures.com/patterns/dark-matter.png)",
	"url(https://www.transparenttextures.com/patterns/dark-mosaic.png)",
	"url(https://www.transparenttextures.com/patterns/dark-stripes.png)",
	"url(https://www.transparenttextures.com/patterns/dark-stripes-light.png)",
	"url(https://www.transparenttextures.com/patterns/dark-tire.png)",
	"url(https://www.transparenttextures.com/patterns/dark-wall.png)",
	"url(https://www.transparenttextures.com/patterns/dark-wood.png)",
	"url(https://www.transparenttextures.com/patterns/darth-stripe.png)",
	"url(https://www.transparenttextures.com/patterns/debut-dark.png)",
	"url(https://www.transparenttextures.com/patterns/debut-light.png)",
	"url(https://www.transparenttextures.com/patterns/diagmonds.png)",
	"url(https://www.transparenttextures.com/patterns/diagmonds-light.png)",
	"url(https://www.transparenttextures.com/patterns/diagonal-noise.png)",
	"url(https://www.transparenttextures.com/patterns/diagonal-waves.png)",
	"url(https://www.transparenttextures.com/patterns/diagonales-decalees.png)",
	"url(https://www.transparenttextures.com/patterns/diamond-eyes.png)",
	"url(https://www.transparenttextures.com/patterns/diamond-upholstery.png)",
	"url(https://www.transparenttextures.com/patterns/diamonds-are-forever.png)",
	"url(https://www.transparenttextures.com/patterns/dimension.png)",
	"url(https://www.transparenttextures.com/patterns/dirty-old-black-shirt.png)",
	"url(https://www.transparenttextures.com/patterns/dotnoise-light-grey.png)",
	"url(https://www.transparenttextures.com/patterns/double-lined.png)",
	"url(https://www.transparenttextures.com/patterns/dust.png)",
	"url(https://www.transparenttextures.com/patterns/ecailles.png)",
	"url(https://www.transparenttextures.com/patterns/egg-shell.png)",
	"url(https://www.transparenttextures.com/patterns/elastoplast.png)",
	"url(https://www.transparenttextures.com/patterns/elegant-grid.png)",
	"url(https://www.transparenttextures.com/patterns/embossed-paper.png)",
	"url(https://www.transparenttextures.com/patterns/escheresque.png)",
	"url(https://www.transparenttextures.com/patterns/escheresque-dark.png)",
	"url(https://www.transparenttextures.com/patterns/exclusive-paper.png)",
	"url(https://www.transparenttextures.com/patterns/fabric-plaid.png)",
	"url(https://www.transparenttextures.com/patterns/fabric-1-dark.png)",
	"url(https://www.transparenttextures.com/patterns/fabric-1-light.png)",
	"url(https://www.transparenttextures.com/patterns/fabric-of-squares.png)",
	"url(https://www.transparenttextures.com/patterns/fake-luxury.png)",
	"url(https://www.transparenttextures.com/patterns/fancy-deboss.png)"
);
var current = Math.floor(Math.random() * backgrounds.length);

function nextBackground() {
	shirt.css("background-image", backgrounds[current]);
	current++;
}
setInterval(nextBackground, 4000);