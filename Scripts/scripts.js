$(document).ready(function () {

    // Formulario 
    // -------------------------------------
    $(function() {
	    var GridForms = {
		    el: {
			    fieldsContainers: $('[data-field-span]'),
			    focusableFields: $('input, textarea, select', '[data-field-span]')
		    },
		    init: function() {
			    this.focusField(this.el.focusableFields.filter(':focus'));
			    this.events();
		    },
		    focusField: function(currentField) {
			    currentField.closest('[data-field-span]').addClass('focus');
		    },
		    removeFieldFocus: function() {
			    this.el.fieldsContainers.removeClass('focus');
		    },
		    events: function() {
			    var that = this;
			    that.el.fieldsContainers.click(function() {
				    $(this).find('input, textarea, select').focus();
			    });
			    that.el.focusableFields.focus(function() {
				    that.focusField($(this));
			    });
			    that.el.focusableFields.blur(function() {
				    that.removeFieldFocus();
			    });
		    }
	    };

	    GridForms.init();
    });

    // Validación de formularios
    // -----------------------------------

    // Decoramos los campos requeridos
    $('.required').append(' <span>*</span>');

    // // La fecha mínima a escojer es la de hoy
    // var d = new Date();
    // var month = d.getMonth()+1;
    // var day = d.getDate();
    // var fechaDeHoy =  d.getFullYear() + '-' + ((''+month).length<2 ? '0' : '') + month + '-' + ((''+day).length<2 ? '0' : '') + day;
    // var fechaMin = $('input[type="date"]').attr('min',fechaDeHoy);



    // Multi-idioma
    // ------------------------------------ 
        var URL = window.location.toString();

        var engMenu = ".widget-menu-en";
        var espMenu = ".widget-menu-es";

        var botonLeer = $('.button.read');
        var botonEnviar = $('.widget-custom-form-widget button[type="submit"]').text('SEND ME INFORMATION ABOUT THIS').addClass('btn-caution');
        var botonReserva = $('.js-booking');
        var botonHome = $('.js-home');

        if (URL.indexOf('es/') > -1) {
            $(engMenu).css('display','none');
            $(espMenu).css('display','block');
            botonLeer.text('LEER »');
            botonEnviar.text('ENVIADME INFORMACIÓN SOBRE ESTO');
            botonReserva.text('HACER OTRA RESERVA');
            botonHome.text('VOLVER AL INICIO');
        } else {
            $(engMenu).css('display','block');
            $(espMenu).css('display','none');
        }


    // Galeria de imágenes
    // -------------------------------------
    $(function(){
	    // Initialize the image gallery
	    $('.image > a').touchTouch();
    });


    // Desactiva el overlay de los alert-box
    // -------------------------------------
    $(function(){
	    
	    $('.close').click(function() {
	        $('.alert-background').css('display','none');
	    });
    });


    // Enlace a la lista de todos los posts 
    // mostrados en la página de inicio
    // -------------------------------------
    var claseTitulo = "post-list-title";
    var claseBoton = "button tiny";

    var marketLink = "<a href='/marketplace' title='View all items for this category'> View all</a>";
    var newsLink = "<a href='/news' title='View all items for this category'> View all</a>";
    $('.widget-last-market > header h1').append(marketLink).addClass(claseTitulo);
    $('.widget-last-news > header h1').append(newsLink).addClass(claseTitulo);
    
    var mercaLink = "<a href='/es/marketplace' title='Ver todos los artículos para esta categoria'> Ver todo</a>";
    var noticiasLink = "<a href='/es/noticias' title='Ver todos los artículos para esta categoria'> Ver todo</a>";
    $('.widget-last-mercadillo > header h1').append(mercaLink).addClass(claseTitulo);
    $('.widget-last-noticias > header h1').append(noticiasLink).addClass(claseTitulo);

    $('.post-list-title a').addClass(claseBoton);


    // Enseña el menú de Admin que remplaza 
    // al dashboard
    // -------------------------------------
    $('#admin-menu-button').click(function () {
        $('#admin-menu').toggle();
        $('#admin-menu-button').toggleClass('active');
    });

    
    // Sustituye el texto del menú inicio/start
    // ----------------------------------------
    var iconoHome = '<i class="fa fa-home fa-2x"></i>'
    $('.widget-navigation .first a').text('').prepend(iconoHome);

    
    // Date picker & Time picker
    // ----------------------------------------
    $('.datepicker').pickadate()
    $('.timepicker').pickatime()

    // En casteplano
    $('.datepicker_ES').pickadate({
        monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
        today: 'Hoy',
        clear: 'Limpiar',
        close: 'Cerrar',
        formatSubmit: 'dd/mm/yyyy'
    });


    // Selector de contenidos
    // ----------------------------------------

    var contenidosInactivos = [];

    
    $('.selector-contenido-elemento:not(.activo)').each(function() {
         contenidosInactivos.push($(this).attr('rel'));
    }),
    $.each(contenidosInactivos, function(index, item) {
        $('#' + item).hide(); 
    });     

    $('.selector-contenido-elemento').click(function() {
        $('.selector-contenido-elemento').removeClass('activo');
        $(this).addClass('activo');

        var contenidosInactivos = [];
        $('.selector-contenido-elemento:not(.activo)').each(function() {
             contenidosInactivos.push($(this).attr('rel'));
        }),
        $.each(contenidosInactivos, function(index, item) {
            $('#' + item).hide(); 
        });

        esteContenido = $(this).attr('rel');
        $('#' + esteContenido).show();
    });


    // FORM PREFILLER ---> Comentar en producción!!!
    // ---------------------------------------------
    var PrefillMachine = {
  
      init: function() {
        this.bindUIActions();
      },
  
      bindUIActions: function() {
        $("#prefill-correct").on("click", this.prefillCorrectly);
      },
  
      prefillCorrectly: function() { 
        // Solo los campos requeridos
        $("#ES_ServiceRequest_Name").val("Memory");
        $("#ES_ServiceRequest_Surname").val("Soft");
        $("#ES_ServiceRequest_Adress").val("C/ Miguel Sorá 6A");
        $("#ES_ServiceRequest_Stay").val("1");
        $("#ES_ServiceRequest_TotalPersons").val("1");
        $("#ES_ServiceRequest_Adults").val("1");
        $("#ES_ServiceRequest_Children").val("0");
        $("#ES_ServiceRequest_Infants").val("0");
        $("#ES_ServiceRequest_Arrival_Date").val("2014-12-31");
        $("#ES_ServiceRequest_Arrival_Time").val("11:00");
        $("#ES_ServiceRequest_Arrival_Flight").val("MA6234");
        $("#ES_ServiceRequest_Arrival_From").val("Mahón");
        $("#ES_ServiceRequest_Departure_Date").val("2015-12-31");
        $("#ES_ServiceRequest_Departure_Time").val("11:00");
        $("#ES_ServiceRequest_Departure_Flight").val("MA3284");
        // Inglispitinglis
        $("#ServiceRequest_Name").val("Memory");
        $("#ServiceRequest_Surname").val("Soft");
        $("#ServiceRequest_Adress").val("C/ Miguel Sorá 6A");
        $("#ServiceRequest_Stay").val("1");
        $("#ServiceRequest_TotalPersons").val("1");
        $("#ServiceRequest_Adults").val("1");
        $("#ServiceRequest_Children").val("0");
        $("#ServiceRequest_Infants").val("0");
        $("#ServiceRequest_Arrival_Date").val("2014-12-31");
        $("#ServiceRequest_Arrival_Time").val("11:00");
        $("#ServiceRequest_Arrival_Flight").val("MA6234");
        $("#ServiceRequest_Arrival_From").val("Mahón");
        $("#ServiceRequest_Departure_Date").val("2015-12-31");
        $("#ServiceRequest_Departure_Time").val("11:00");
        $("#ServiceRequest_Departure_Flight").val("MA3284");
      }

    }

    PrefillMachine.init();


});



