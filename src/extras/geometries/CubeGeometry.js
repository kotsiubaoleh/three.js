/**
 * @author mrdoob / http://mrdoob.com/
 */


THREE.CubeGeometry = function ( width, height, depth, widthSegments, heightSegments, depthSegments ) {

	console.warn( 'THREE.CubeGeometry has been renamed to THREE.BoxGeometry.' );
	return new THREE.BoxGeometry( width, height, depth, widthSegments, heightSegments, depthSegments );

 };
