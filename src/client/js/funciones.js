function general(){
	 $(document).ready(function(){
  					(function() {
				[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
					new SelectFx(el);
				} );
			})();	
		})
  	}

  
    