# IPL Data Discovery

## Page Load Time

### PageSpeed Insights  and Lighthouse Audit(Desktop) (All pages have similar statistics)

First Contentful Paint - 0.3 s

Speed Index - 1.2 s

Largest Contentful Paint - 0.5 s

Time to Interactive - 0.4 s

Total Blocking Time - 0 ms

Cumulative Layout Shift - 0.056

Overall Score - 99/100

## Load time optimization

I am serving static pages. There are approximately 10k pages. Most of the pages are for displaying the highlights that we get from deliveries.csv file. 

The major bottleneck was the data especially the deliveries.csv which was over 17MB in space. The major challenge for me was to somehow load it up into Gatsby in chunks. Initially it gave heap out of memory error. But then I made a python script which is stored at `/scripts/splitChunksById.py` which splits it into several csv files. Each file is such that it contains 40 match ids. I chose to split by id because if I had split by number of rows then a match would have information split over two files and that would confuse my source plugin and it would create extra nodes.

Each data file is now loaded only when necessary. Also I am loading only limited records and users can then afterwards use filters and search to request for more info. Below are network requests size for data on each page

| Route               | Main CSV file        | page-data.json   |
| ------------------- | -------------------- | ---------------- |
| /matches/           | matches.csv(147KB)   | Less than 1KB    |
| /matches/{match_id} | deliveries.csv(17MB) | Less than 14.1KB |
| /players            | players.csv(31KB)    | Less than 1KB    |

Also I have done image optimization and reduced the size of all the logos according to their width. 

## Live site URL

https://youthful-panini-bd7f0f.netlify.app/