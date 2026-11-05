CuratedbyPriti website: how to put it online and keep it updated
================================================================

PUT IT ONLINE FREE (Netlify, about 2 minutes)
1. Unzip this folder.
2. Go to app.netlify.com/drop and sign up free.
3. Drag the whole unzipped folder onto the page. You get a live link at once.
4. Site configuration > Change site name, for example "curatedbypriti" gives https://curatedbypriti.netlify.app

IMPORTANT FOR GOOGLE (SEO)
The pages, sitemap.xml, robots.txt and llms.txt use this address: https://curatedbypriti.netlify.app
If your final address is different, open each .html file, sitemap.xml, robots.txt
and llms.txt in a text editor and replace https://curatedbypriti.netlify.app with your real address, then upload again.
Then add the site to Google Search Console (search.google.com/search-console) and submit
https://curatedbypriti.netlify.app/sitemap.xml. Also claim and complete your Google Business Profile for Thane local search.

ADD REAL CUSTOMER REVIEWS
Open js/app.js, find the line   var REVIEWS=[];   near the top and add entries such as
   {name:'Aarti S.', text:'The bouquet looked even better than the photo.', source:'Google review'}
Only add reviews that real customers wrote. They then show on the Home and Reviews pages.

CHANGE PRICES OR PRODUCTS
Prices and descriptions live in the product list (var P=[...]) inside js/app.js and are also
written into collection.html. Ask Claude to rebuild the site after changing them so every page stays in sync.
