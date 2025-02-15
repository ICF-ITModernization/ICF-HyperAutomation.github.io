export default function HUDlayout(props) {
    return (
        <html lang="en-us">
            <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <script src="https://www.hudexchange.info/sites/onecpd/themes/hudexchange/js/google_tag_manager.js?20200827"></script>
            <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,300,600' rel='stylesheet' type='text/css' />
            <link href="https://fonts.googleapis.com/css?family=Poppins:600" rel="stylesheet" type='text/css' />
            <meta name="description" content="" />
            <meta name="keywords" content="aaq" />
            <meta name="viewport" content="width = device-width, initial-scale = 1.0" />
            <meta name="HUDX_ct" content="Resources" />
            <meta name="HUDX_pop" content="1.2" />
            <title>Program Support - HUD Exchange</title>
            <link rel="icon" href="https://www.hudexchange.info/sites/onecpd/themes/hudexchange/images/favicon.ico" type="image/x-icon" />
            <link rel="shortcut icon" href="https://www.hudexchange.info/sites/onecpd/themes/hudexchange/images/favicon.ico" type="image/x-icon" />
            <link rel="stylesheet" type="text/css" href="https://www.hudexchange.info/sites/onecpd/themes/hudexchange/css/ui/jquery-ui-1.12.1.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
            <link href="https://www.hudexchange.info/sites/onecpd/themes/hudexchange/css/bootstrap.css?20190619" rel="stylesheet" />
            <script type="text/javascript">
            </script>
            <script type="text/javascript" src="https://www.hudexchange.info/core/modules/v1/core_assets/js/mura.min.js?v=7.1.0"></script>
            </head>
        <body data-spy="scroll" data-target=".scrollspy-target" data-offset="150">
        <div class="overlay"></div>
        <header>
        <nav class="navbar navbar-default navbar-fixed-top yamm" id="mainNav">
        <div class="resourcesHeader col-md-12">
        <div class="fluid-container">
        <a href="#mainContent" class="focusable skip-link sr-only sr-only-focusable">Skip to main content</a>
        <p class="m-0 quip"><em>Resources and assistance to support HUD's community partners</em></p>
        <ul class="list-unstyled end">
        <li class="active"><a href="/homelessness-assistance/resources-for-homeless-persons/">NEED HOUSING ASSISTANCE?</a></li>
        <li><a href="/mailinglist/" class="line">Email Updates</a>
        <a href="/hudexchange-portal/">Log In</a></li>
        </ul>
        </div>
        </div>
        <div class="fluid-container">
        <div class="navbar-header">
        <a class="navbar-brand" href="/">
        <img src="https://www.hudexchange.info/sites/onecpd/themes/hudexchange/images/hudLogo.png?version=hudx-2625" alt="HUD Exchange" class="img-responsive" />
        <p>HUD Exchange</p>
        </a>
        <div class="mholder">
        <a href="#" data-toggle="dropdown" class="dropdown-toggle searchLink mobile" data-target="#searchSection" aria-expanded="false" aria-controls="navbar" aria-label="search" role="button">
        <span class="hidden">Search</span>
        <span class="search-ico"></span>
        </a>
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-mobile" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar top-bar"></span>
        <span class="icon-bar middle-bar"></span>
        <span class="icon-bar bottom-bar"></span>
        </button>
        </div>
        </div>
        <ul id="searchSection" class="searchSection nav navbar-nav">
        <li class="dropdown yamm-fw searchNav">
        <a href="#" data-toggle="dropdown" class="dropdown-toggle searchLink" aria-label="search" role="button">
        <span class="hidden">Search</span>
        <span class="search-ico"></span>
        <span class="ico-remove"></span>
        </a>
        <ul class="dropdown-menu" style={{ display: 'none' }}>
        <li>
        <div class="row">
        <div class="col-sm-12 eee">
        <form action="/search/?searchaction=s2" method="get" >
        <input id="navSearch_km" name="km" value="10" type="hidden" />
        <input id="navSearch_ct" name="ct" value="" type="hidden" />
        <input id="navSearch_dsp" name="dsp" value="" type="hidden" />
        <input type="hidden" name="csrf_token" value="D808FD64-4E34-444D-A462A6E630D2ED86" />
        <span class="sr-only">Form title</span>
        <div class="mainSearchContainer col-xs-9 col-md-10 col-lg-11 m-2">
        <label for="mainSearch" class="sr-only">Search</label>
        <div class="right-inner-addon ">
        <input type="text" class="form-control" name="q" id="mainSearch" placeholder="Search HUDExchange.info" />
        <input type="submit" class="submit search-ico-gray" value="Go" />
        </div>
        <div class="mega-close-box"><span class="ico-mega-close" aria-label="Close search" role="button" tabindex="0"></span></div>
        </div>
        </form>
        </div>
        </div>
        </li>
        </ul>
        </li>
        </ul>
        <div id="navbar" class="navbar-right navbar-collapse collapse">
        <ul class="nav navbar-nav">
        <li class="dropdown yamm-fw visible-md visible-sm visible-xs"><a href="/hudexchange-portal/">Log In</a></li>
        <li class="dropdown yamm-fw " tabindex="0">
        <a href="/programs/" class="movingTarget" aria-expanded=
        "false">Programs<span class="more-arrow"></span></a><ul class="dropdown-menu programs">
        <li class="yamm-content container">
        <div class="row">
        <div class="col-lg-4 col-md-12">
        <h3>Programs &amp; Related Topics</h3>
        <div class="col-md-12">
        <ul class="mega-check">
        <li><a href="/programs/relocation/">Acquisition and Relocation</a></li>
        <li><a href="/programs/cdbg">CDBG Program</a></li>
        <li><a href="/programs/consolidated-plan">Consolidated Planning</a></li>
        <li><a href="/programs/coc">Continuum of Care Program</a></li>
        <li><a href="/programs/esg/">Emergency Solutions Grants Program</a></li>
        </ul>
        </div>
        </div>
        <div class="col-lg-8 col-md-12">
        <h3>&nbsp;</h3>
        <div class="col-md-6">
        <ul class="mega-check">
        <li><a href="/programs/environmental-review/">Environmental Review</a></li>
        <li><a href="/programs/home">HOME Program</a></li>
        <li><a href="/programs/hopwa">HOPWA Program</a></li>
        <li><a href="/programs/housing-counseling">Housing Counseling Program</a></li>
        <li><a href="/programs/public-housing">Public Housing and Voucher Programs</a></li>
        </ul>
        </div>
        <div class="col-md-6">
        <ul class="mega-check third">
        <li><a href="/programs/drgr/">DRGR</a><a class="btn btn-secondary mega-btn" href="https://drgr.hud.gov/DRGRWeb/">Log In</a></li>
        <li><a href="/programs/e-snaps/"><em>e-snap</em>s</a><a class="btn btn-secondary mega-btn" href="https://esnaps.hud.gov/grantium/frontOffice.jsf">Log In</a></li>
        <li><a href="/programs/housing-counseling/hcs/">Housing Counseling System</a><a class="btn btn-secondary mega-btn" href="/programs/housing-counseling/hcs/">Log In</a></li>
        <li><a href="/programs/idis/">IDIS</a><a class="btn btn-secondary mega-btn" href="https://idis.hud.gov/">Log In</a></li>
        <li><a href="/programs/sage/">Sage</a><a class="btn btn-secondary mega-btn" href="https://www.sagehmis.info/">Log In</a></li>
        </ul>
        </div>
        </div>
        </div>
        </li>
        <li><a class="btn btn-primary mega col-sm-12 text-center" href="/programs/">View All Programs &amp; Related Topics</a></li>
        </ul></li>
        <li class="dropdown yamm-fw " tabindex="0">
        <a href="/resources/" class="movingTarget" aria-expanded=
        "false">Resources<span class="more-arrow"></span></a><ul class="dropdown-menu">
        <li class="yamm-content container">
        <div class="row">
        <div class="col-md-6 vertical-container">
        <h3><a href="/resources">Resource Library</a></h3>
        <a href="/resources"><img alt="Books on a shelf" src="/sites/onecpd/assets/Image/Books-On-Shelf-small.jpg" style={{ height: "193px", width: "470px"}} /></a>
        <p><a href="/resources">Explore featured publications and browse regulations, policy guidance, toolkits, and other resources.</a></p>
        </div>

        <div class="col-md-6 vertical-container">
        <h3><a href="/faqs">FAQ Collections</a></h3>
        <a href="/faqs"><img alt="Hand Point to an FAQ sign" src="https://www.hudexchange.info/sites/onecpd/assets/Image/FAQ-Hand-Pointing-small.jpg" style={{ height: "193px", width: "470px"}}  /></a>
        <p><a href="/faqs">Find answers to frequently asked questions.</a></p>
        </div>
        </div>
        </li>
        </ul></li>
        <li class=""><a href="/trainings/">Trainings</a></li>
        <li class="dropdown yamm-fw active" tabindex="0">
        <a href="/program-support/" class="movingTarget" aria-expanded=
        "false">Program Support<span class="more-arrow"></span></a><ul class="dropdown-menu">
        <li class="yamm-content container">
        <div class="row">
        <div class="col-md-6 vertical-container">
        <h3><a href="/program-support/my-question">Ask a Question</a></h3>
        <a href="/program-support/my-question"><img alt="Books on a shelf" src="https://www.hudexchange.info/sites/onecpd/assets/Image/Woman-Question-Marks-small.jpg" style={{ height: "193px", width: "470px"}} /></a>
        <p><a href="/program-support/my-question">Ask a basic policy or reporting system question.</a></p>
        </div>
        <div class="col-md-6 vertical-container">
        <h3><a href="/program-support/technical-assistance/">Request In-Depth Assistance</a></h3>
        <a href="/program-support/technical-assistance/"><img alt="Hand Point to an FAQ sign" src="https://www.hudexchange.info/sites/onecpd/assets/Image/People-Meeting-Around-Table-small.jpg" style={{ height: "193px", width: "470px"}} /></a>
        <p><a href="/program-support/technical-assistance/">Request in-depth assistance with implementing a HUD-funded program.</a></p>
        </div>
        </div>
        </li>
        <li><a class="btn btn-primary mega col-sm-12 text-center" href="/program-support/">View All Program Support</a></li>
        </ul></li>
        <li class="dropdown yamm-fw " tabindex="0">
        <a href="/grantees/" class="movingTarget" aria-expanded=
        "false">Grantees<span class="more-arrow"></span></a><ul class="dropdown-menu">
        <li class="yamm-content container">
        <div class="row">
        <div class="col-lg-4 col-md-12 vertical-container">
        <h3><a href="/grantees/find-a-grantee">Find a Grantee Page</a></h3>
        <a href="/grantees/find-a-grantee"><img alt="Find Grantee Profiles" class="img-responsive" src="https://www.hudexchange.info/sites/onecpd/assets/Image/Pin-On-Map-small.jpg" style={{ height: "154px", width: "375px"}} /></a>
        <p><a href="/grantees/find-a-grantee">Search for a specific grantee and view its&nbsp;awards, contact information, and reports, and more.</a></p>
        </div>
        <div class="col-lg-4 col-md-12 vertical-container">
        <h3><a href="/grantees/allocations-awards/">Awards &amp; Allocations</a></h3>
        <p><a href="/grantees/allocations-awards/">Find award and allocation amounts for grantees by year, program, and state.</a></p>
        <h3><a href="/grantees/contacts/">Contact Information</a></h3>
        <p><a href="/grantees/contacts/">Find point of contact information for HUD's grantees.</a></p>
        <h3><a href="/grantees/reports/">Reports &amp; Plans</a></h3>
        <p><a href="/grantees/reports/">Browse the library of grantee reports and plans, organized by program.</a></p>
        </div>
        <div class="col-lg-4 col-md-12 vertical-container">
        <h3><a href="/grantees/projects/">Project Descriptions</a></h3>
        <a href="/grantees/projects/"><img alt="Project Highlights" class="img-responsive" src="https://www.hudexchange.info/sites/onecpd/assets/Image/hands-holding-paper-house-small.jpg" style={{ height: "154px", width: "375px"}} /></a>
        <p><a href="/grantees/projects/">Learn about what HUD grantees are doing across the nation.</a></p>
        </div>
        </div>
        </li>
        <li><a class="btn btn-primary mega col-sm-12 text-center" href="/grantees/">Find Information About HUD Grantees</a></li>
        </ul></li>
        <li class=""><a href="/news/">News</a></li>
        </ul>
        </div>
        </div>
        </nav>
        <div id="navbar-mobile" class="animated slideInDown container">
        <div class="home in out">
        <a href="/">Home</a>
        <a href="/hudexchange-portal/">Log-in</a>
        </div>
        <ul class="list-unstyled">
        <li><a href="/programs/">Programs</a></li>
        <li><a href="/resources/">Resources</a>
        <ul class="list-unstyled">
        <li><a href="/resources/">Resource Library</a></li>
        <li><a href="/faqs/">FAQ Collections</a></li>
        </ul>
        </li>
        <li><a href="/trainings/">Trainings</a></li>
        <li><a href="/program-support/">Program Support</a>
        <ul class="list-unstyled">
        <li><a href="/program-support/my-question/">Ask a Question</a></li>
        <li><a href="/program-support/technical-assistance/">Request In-Depth Assistance</a></li>
        </ul>
        </li>
        <li><a href="/grantees/">Grantees</a>
        <ul class="list-unstyled">
        <li><a href=" /grantees/find-a-grantee/">Find a Grantee</a></li>
        <li><a href="/grantees/allocations-awards/">Awards and Allocations</a></li>
        <li><a href="/grantees/contacts/">Contact Information</a></li>
        <li><a href="/grantees/reports/">Reports & Plans</a></li>
        <li><a href="/grantees/projects/">Project Descriptions</a></li>
        </ul>
        </li>
        <li><a href="/news/">News</a>
        <ul class="list-unstyled">
        <li><a href="/mailinglist/">Email Updates</a></li>
        </ul>
        </li>
        </ul>
        <a href="/housing-and-homeless-assistance/" class="btn btn-brand-secondary btn-block">Need Housing Assistance?</a>
        </div>
        </header>
        <div class="expand-control">
        <main>
           {props.children}
        </main>
        </div>
        <div class="wrapper footer mt-2">
        <footer>
        <div class="container">
        <div class="col-sm-12 col-md-9 col-lg-9 main-links">
        <ul class="list-unstyled">
        <li><a href="/">Home</a></li>
        <li><a href="/about/">About</a></li>
        <li><a href="/accessibility/">Accessibility</a></li>
        <li><a href="/browser-compatiblity/">Browser Compatibility</a></li>
        <li><a href="/website-privacy-policies/">Privacy Policies</a></li>
        </ul>
        <ul class="list-unstyled mt-2">
        <li><a href="http://hud.gov/">HUD.gov</a></li>
        <li><a href="https://www.huduser.gov">HUDUser.gov</a></li>
        <li><a href="http://hud.gov/fairhousing">FHEO</a></li>
        <li><a href="http://portal.hud.gov/hudportal/HUD/program_offices/administration/foia">FOIA</a></li>
        <li><a href="http://portal.hud.gov/hudportal/HUD/program_offices/eeo/nofearactfy">No FEAR Act Data</a></li>
        <li><a href="https://www.whitehouse.gov/">The White House</a></li>
        <li><a href="https://www.usa.gov/" class="last">USA.gov</a></li>
        </ul>
        <div class="mt-4">
        <a href="http://hud.gov/"><img src="https://www.hudexchange.info/sites/onecpd/themes/hudexchange/images/hud-sm-logo.png" alt="Hud" class="mr-1" /></a>
        <a href="http://hud.gov/fairhousing"><img src="https://www.hudexchange.info/sites/onecpd/themes/hudexchange/images/eho-logo.png" alt="Equal Housing Opportunity" class="mr-1" /></a>
        <span>2021 US Department of Housing and Urban Development</span>
        </div>
        </div>
        <div class="col-sm-12 col-md-3 col-lg-3 pull-right">
        <p><a href="/mailinglist/">Subscribe to Email Updates</a></p>
        <p><a href="/contact-us/">Contact Us</a></p>
        <p><span>Connect with Us</span></p>
        <p><a href="https://www.youtube.com/user/HUDexchange" class="sprite sprite-utube-logo" aria-label="HUD Exchange on YouTube"><span class="sr-only">YouTube</span></a>
        <a href="https://twitter.com/HUDExchangeInfo" class="sprite sprite-twitter-logo" aria-label="HUD Exchange on Twitter"><span class="sr-only">Twitter</span></a>
        <a href="https://www.flickr.com/photos/hudexchange/" class="sprite sprite-flickr-logo" aria-label="HUD Exchange on Flickr"><span class="sr-only">Flickr</span></a>
        <a href="https://www.facebook.com/HUD" class="sprite sprite-facebook-logo" aria-label="HUD Exchange on Facebook"><span class="sr-only">Facebook</span></a></p>
        <div class="offset-top contrast-toggle-wrapper">
        <span tabindex="0" id="contrastKeyboardToggle">Toggle High Contrast: <input id="contrastToggle" type="checkbox" data-size="small" data-style="hud" tabindex="0" /></span>
        </div>
        </div>
        <div class="col-md-12">
        <span class="block mt-4"><strong>Note:</strong> Guidance documents, except when based on statutory or regulatory authority or law, do not have the force and effect of law and are not meant to bind the public in any way. Guidance documents are intended only to provide clarity to the public regarding existing requirements under the law or agency policies.</span>
        </div>
        </div>
        </footer>
        </div>
        <script src="https://www.hudexchange.info/sites/onecpd/themes/hudexchange/js/bootstrap.min.js"></script>
        <script src="https://www.hudexchange.info/sites/onecpd/themes/hudexchange/js/jquery/jquery-ui-1.12.1.min.js"></script>
        <script src="https://www.hudexchange.info/sites/onecpd/themes/hudexchange/js/jquery/jquery.form.js"></script>
        <script src="https://www.hudexchange.info/sites/onecpd/themes/hudexchange/js/hudexchange.analytics.js?v=20190327&isUserLoggedIn=false"></script>
        <script src="https://www.hudexchange.info/sites/onecpd/themes/hudexchange/js/bootstrap-toggle.min.js"></script>
        <script src="https://www.hudexchange.info/sites/onecpd/themes/hudexchange/js/textchange.js"></script>
        <script src="https://www.hudexchange.info/sites/onecpd/themes/hudexchange/js/min/hudexchange.functions.min.js"></script>
        <script src="https://www.hudexchange.info/sites/onecpd/themes/hudexchange/js/jquery/jquery.tablesorter.min.js"></script>
        <script src="https://www.hudexchange.info/sites/onecpd/themes/hudexchange/js/jquery/jquery.tablesorter.pager.min.js"></script>
        <script src="https://www.hudexchange.info/sites/onecpd/themes/hudexchange/js/validate.functions.js?20180905"></script>
        <script>
        var highContrastURL = "https://www.hudexchange.info/sites/onecpd/themes/hudexchange/css/bootstrap_highcontrast.css"
        </script>
        <script src="https://www.hudexchange.info/sites/onecpd/themes/hudexchange/js/highcontrast.js"></script>
        <script src="//www.hudexchange.info/core/modules/v1/cta/js/mura.displayobject.cta.min.js" ></script>
        </body>
        </html>
    );
}