var ie = (function(){
	var MSIE = /MSIE (\d+)/.exec(navigator.userAgent);
	var isNumber = function(e){
		if( typeof e != 'number' ){
			throw new Error('not number');
		}
	};
	var better = function(e){
		isNumber(e);
		if(MSIE) {
			if(MSIE[1] > e) {
				return true;
			} else {
				return false;
			}
		} else {
			return true;
		}
	};
	var worst = function(e){
		isNumber(e);
		if(MSIE) {
			if(MSIE[1] < e) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	};


	var betterOrEqual = function(e){
		isNumber(e);
		if(MSIE) {
			if(MSIE[1] >= e) {
				return true;
			} else {
				return false;
			}
		} else {
			return true;
		}
	};

	var equal = function(e){
		isNumber(e);
		if(MSIE) {
			if(MSIE[1] == e) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	};

	var version = MSIE ? MSIE[1] : false;

	return {
		better: better,
		worst: worst,
		betterOrEqual: betterOrEqual,
		equal: equal,
		version: version,	v: version
	}
})();