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

	return {
		better: better,
		worst: worst,
		betterOrEqual: betterOrEqual
	}
})();