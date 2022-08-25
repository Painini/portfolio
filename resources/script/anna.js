var Navbar = document.getElementById('Navbar');
var btn = document.getElementById('SvgBtn');
var text = document.getElementById('Text');
var Svg = document.getElementById('SVG');
var kontakt = document.getElementById('KontaktaMig');
var telefon = document.getElementById('Telefon');
var svgDiv = document.getElementById('SvgDiv');
var imgMario = document.getElementById('ImgMario');
var youtubeVideo = document.getElementById('YoutubeVideo');
var videoDiv = document.getElementById('VideoDiv');

Svg.style.marginTop =  '-' + text.offsetHeight-2 + 'px';
telefon.style.marginBottom = '80px';
svgDiv.style.height = btn.offsetHeight + btn.offsetHeight + 'px';
Svg.style.height = '0px';
Svg.style.overflow = 'hidden';

btn.addEventListener('click', function()
{
	if(text.style.visibility == 'hidden')
	{
		Svg.style.height = '0px';
		svgDiv.style.height = btn.offsetHeight + text.offsetHeight + 'px';
		kontakt.style.marginTop = '0px';
		telefon.style.marginBottom = '80px';

		Svg.style.visibility = 'hidden';
		Svg.style.opacity = '0';

		text.style.visibility = 'visible';
		text.style.opacity = '1';
	}
	else
	{
		Svg.style.height = imgMario.offsetHeight + 'px';
		Svg.style.overflow = 'hidden';
		svgDiv.style.height = btn.offsetHeight + Svg.offsetHeight + 'px';
		kontakt.style.marginTop = '0px';
		telefon.style.marginBottom = '80px';

		text.style.visibility = 'hidden';
		text.style.opacity = '0';

		Svg.style.visibility = 'visible';
		Svg.style.opacity = '1';
	}
});

function NavbarIcon(x)
{
	x.classList.toggle("change");
		
}

$(window).resize(function()
{
	if (text.style.visibility == 'hidden')
	{
		Svg.style.height = imgMario.offsetHeight + 'px';
		svgDiv.style.height = btn.offsetHeight + text.offsetHeight + 'px';
		kontakt.style.marginTop = imgMario.offsetHeight + 'px';
		telefon.style.marginBottom = '80px';
	}
	else
	{
		Svg.style.height = imgMario.offsetHeight - imgMario.offsetHeight + 'px';
		svgDiv.style.height = btn.offsetHeight + Svg.offsetHeight + 'px';
		kontakt.style.marginTop = '-' + Svg.offsetHeight-2 + 'px';
		telefon.style.marginBottom = '80px';
	}
});