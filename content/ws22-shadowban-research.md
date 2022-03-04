---
title: Winter School 2022
subtitle: One of the first research using this tool
date: 2021-11-26
extraCSS: "/css/informative.css"
draft: false
---

The [Digital Methods Winter School and Data Sprint 2022](https://wiki.digitalmethods.net/Dmi/WinterSchool2022) have been hold online at Amsterdam University (10-14 January 2022). This is the collective report we produced during the data sprint.

###### Check the [Project Pitch slides](/slides/ws22-pitch) and the [Conclusive Presentation slides](/slides/ws22-results) for a quick overview.
 
---
<br>

# Mapping Ban and Shadow-Ban on TikTok: Expose hidden censorship with a cross-national research
<br>

### Team Members
**Facilitators**: Salvatore Romano, Marc Faddoul

**Participants**: Nafisa Tschannen, Camila Bonadies, Nadia Murady, Jeanelle Grech, Roseanne Farhat, Barbara Roncalli, Francesca Gheli, Zofia Pawilno-Pacewicz, Dominique Cannis, Chenjie Zhang, Lin Zhao, Grace Watson, Puck Voorhoeve, Margot Hoogerwerf, Chan Ji

### Summary of Key Findings

This project takes inspiration from several similar research investigating moderation practices on TikTok (Ryan et al., 2020, Biddle et al., 2020). These researches indicated that content related to certain political and social topics could be banned or demoted based on country-specific moderation guidelines. During the Winter School, we developed two novel methodologies to detect such forms of censorship, first in the search algorithm and second in the main recommendation feed of the platform, the ForYou page. Our first investigation mapped the different types of ban applied to specific search queries related to sex and LGBTQ+ topics. The second part measured the relative visibility of Israeli and Palestinian activist content on the ForYou Page. A free-software which allows to passively scrape and analyze algorithmic recommendations on TikTok (tiktok.tracking.exposed) was built to conduct this study, which is an important contribution to support the research community in holding the platform accountable.

### 1. Introduction

TikTok is a popular video-sharing platform owned by ByteDance (Dean, 2022). The app was initially released in China in 2016, under the name Douyin. In 2017 Douyin hit international markets under the name of TikTok and is now available in 141 countries (Dean, 2022).

This platform allows its users to generate, view and exchange videos with each other (Poell et al., 2021). The genres of videos range from purposes of comedic, educational, to also simply informative nature. The monthly active user number on TikTok is estimated to be around 1 billion (Dean, 2022). TikTok is an important platform to explore, as it has been gaining astonishing numbers of users over the years and it is widely used all over the world. With its increasing popularity, TikTok raised a lot of concerns in terms of its privacy and moderation policies (Hern, 2020; Biddle et al., 2020). The platform has been accused of censorship and suppression of content relating to political issues as well as accounts belonging to or depicting "unattractive, poor, or otherwise undesirable users" (Biddle et al., 2020).

This report is a result of a meticulous analysis of two phenomena occurring on TikTok - content moderation and account shadowbanning. Content moderation is one of platform governance strategies and it relates to "pre-screening,rejecting, removing, sequestering, banning, downgrading, or demonetizing of content and accounts by platforms" (Poell et al., 2021: 96). In the case of TikTok, content moderation is usually executed through banning certain words from being used, both in the search bar as well as in videos. In case of this research, we explore pornography and sex-related keyword availability across several different countries. We also pay attention to the type of ban placed on specific words, as they may vary per region.

The second form of content control analyzed in this research is shadowbanning - a more elusive kind of platform governance. The shadowban as a phenomenon is not well-researched, as it is not easy to trace. In theory, it consists of the algorithm pushing the "problematic" content or account down and as a result not making it as accessible to users. This leads to very low views numbers. Shadowbanning can be defined as a "cross-platform moderation technique (...) which prevents shadowbanned accounts' usernames from appearing at search" (Are, 2021: 2). In order to explore the possible shadowbanning activity on TikTok, we investigate the potential existence of a political shadowban on terms and accounts related to the Palestinian-Israeli conflict.

### 2. Research Questions

* How can we spot banned and shadow-banned content? How can we automate the process of detecting these forms of censorship?

* Which criteria does the platform implement to ban content? Which of these criteria is location-sensitive?

* Investigate the algorithmic neutrality regarding political content: which content is promoted or demoted on the platform?

### 3. Methodology

For the purposes of this project, Virtual Private Networks (VPNs)—NordVPN and ExpressVPN —were installed for all participants, in order to investigate TikTok feeds, content, and search results across different regions. The political shadowban project used IPs in Isreal—in order to uncover Isreal’s shadowbanning tactics regarding pro-Palestinian movements (like #FreePalestine) and activists accounts that openly discuss Israel’s violence against Palestinian people and the region—whilst the cross-national content moderation group utilized IPs in Argentina, Germany, Israel, Myanmar, Poland, Saudia Arabia, Thailand, the United Arab Emirates, the United States, on top of local IPs in the Netherlands, to investigate to what extent content moderation varied in keyword searches between regions and nations.

#### 3.1 Methodology: Ban

To begin, we set up a database by manually conducting numerous queries via TikTok’s search bar across the different countries’ IPs—aimed at detecting which kinds of pornographic terms are banned in specific countries. Referencing previously released documents covering banned English TikTok queries (Biddle, Ribeiro &amp; Dias, 2020), we chose 47 words related to sexuality and nudity, translated into eight languages: Arabic, German, Spanish, Burmese, Dutch, Polish, Thai, and Vietnamese. Initially, seven countries were selected (Argentina, Germany, Israel, the Netherlands, Poland, Saudi Arabia, and the UAE), reflective of the language proficiencies amongst the scholars, but this was then extended to 11 (adding Thailand, Myanmar, Vietnam, and the United States) to represent more regions into our research, amounting to: Europe, North and South America, the Middle East, and Southeast Asia. Since English is used as the universal standard language for TikTok ’s international moderations, the United States—an English-speaking country with a large user-base—served as a baseline in this research.

Researchers were equipped with VPNs and proceeded to search each of the 47 queries in the dominant language of the assigned country (ex. Querying Polish terms in Poland), manually coding each query result. When a user searches a banned query, one of three content moderation bans are presented to the user: check your spelling, violation of TikTok guidelines, or hateful behavior. As such, when noting content moderation of our queries, query results were categorized amongst one of five different categories: 

1) ban - check your spelling,
2) ban - violation guideline,
3) ban - hateful behavior,
4) available content, 
5) pollution.

Pollution was necessary for our list as it acts as a passive form of content moderation, by flooding the search results with content unrelated to our initial query. Furthermore, each of the 47 words was coded according to whether it was an issue related to women’s movements, nudity, or LGBTQ+ (sexuality).ByteDanceOnce we compiled our data, we produced data visualizations to compare the selected countries with RAWGraph, an open source web tool to create custom vector-based visualizations (Taurino, 2019). Matrix Plot, a visual model on RAWGraph, was applied to explore how each country differed with regards to nudity and sexuality related banned TikTok words, along with the type of moderation. Gephi, on the other hand, was used to connect the keywords and countries based on TikTok 's moderations, clustering results for further analysis. 

We set two nodes in Gephi, the countries (where the queries were searched) and the keywords (in its English translation). The edge between a country and a keyword means the keyword is banned in that country. Also, when two countries share similarities in banning pornographic terms, the distance between clusters are influenced—that is, the nodes of the same banned words would gather those two countries, so the moderations based on countries and regions that we postulate can be revealed through Gephi.

#### 3.2 Methodology: Shadowban

To best investigate and capture TikTok’s shadowbanning tactics regarding Palestinian activists, four research profiles were created on the platform and data was collected using depersonalized research browsers using Brave, due to its affordances which automatically block website trackers and online advertisements by default. After these preliminary steps were made, each participant selected four accounts to follow and interact with: two Pro-Palestine and two Pro-Israel. 

The selection process involved querying [Israel] and [Palestine] separately on different occasions through different research accounts, via the TikTok search bar. TikTok accounts with the highest follower count were selected for further investigation. The two pro-Israel accounts were @idf and @yaelderiofficial, both of which are a part of the Israeli Defence Force (IDF), while the two Pro-Palestine accounts were @hammyenbywammy and @munakurd15—the latter being a well-known activist account that continuously reports on the ongoing conflict. Two research accounts were dedicated to following pro-Palestine TikTok accounts, while the remaining two followed the pro-Israel accounts. To encourage engagement with these TikTok accounts, each researcher liked some videos from the profiles to generate engagement and train the algorithm to recognize our interest in their content, so our FYPs can recommend similar content.

After personalizing the research accounts with deliberate engagement, each participant returned to their respective FYP feed using TikTok TRex extension browser and scrolled through the top 20 videos. The researchers decided on selecting the first 20 videos because in the initial experimental phase of the project, 100 videos were taken into account, but the results were inconsistent after the first 20 to 30 videos, with the FYPs generating random, differing content for all four research profiles—possibly due to the accounts new status with little to no personalization. With this in consideration, the results of the first 20 videos on the FYP were scraped and saved on the same document, noting who used the accounts individually, and comparing each result to see which accounts came up.

Lastly, to gain a better understanding of what content gets recommended more frequently on the FYP, each participant noted each account that appeared on the FYP feed, initially categorized by political affiliations using the descriptions: ‘Palestinian’, ‘Israel’, or ‘neutral’. The categorization was performed using qualitative analysis on each account’s biography and video content. Although this categorization could be a useful way to spot shadowbanning content on TikTok ’s FYP, this categorization procedure was eventually not utilized for further analysis. Instead, our research highlighted the presence of the TikTok accounts we followed on each participant’s FYP, and this network is represented through Gephi.

<img alt="" src="https://lh3.googleusercontent.com/s7lhlqFrUzFY381TNyYurva3Ya7DfMeLSxNNTIavkZV8IwZNJY2d-BKSfPN5fdUznzfAL_EQ2oJ6YQqAnq9VSyaoMX_ne9bjVzyXBXmfc1TbgmsA2s38RENaPaYJ5zQw0g" width="627" height="518">

Figure 1. Visualization of the methodology to uncover shadowbanning practices on TikTok ’s ForYou page (FYP)

### 4. Findings

#### 4.1 TikTok and content moderation: Queries BAN

<img alt="" src="https://lh3.googleusercontent.com/-wuxiL9vpasHRBhQeIJjQAjGaj99fjbF71ZJ9z5NOvZR0n1pyK-4YDTFYaZgYBYe56nt-zY1s4jU0CIIc3wJ1p09XJ_to1FNjQc_ggTlr8pKQ9YIbhJvgPj7_emNP4i0fA" width="623.923437457731" height="255.99033719160926">

Figure 2. Type of moderation most used by TikTok in the selected countries.

As shown in Figure 2, the frequency of the three different types of ban occurring in search results is significantly different based on countries. The most common type of ban used by TikTok in the different countries is the “violation guidelines” ban, which resulted from searches for certain words in each of the countries analyzed. What is also interesting from the graph is the prevalence of the “check your spelling” ban: this is very common among the results in Myanmar, while it is absent in Saudi Arabia and UAE. This is interesting considering that all three countries use a writing system other than the alphabetical one, thus

it may relate to language factors. However, given that Arabic also has a "check your spelling" ban in Israel, the difference seems more influenced by the legal and cultural context. In contrast with this, Saudi Arabia and the UAE, along with Israel, are among the countries where the “hateful behavior” type of ban is most common, whereas in Myanmar, as in the Netherlands, Poland and Thailand, this type of ban never appears. The graph also shows that in Thailand the tendency to “pollute” results is much more widespread than to ban them outright. Countries in Europe and the United States have shown similar results, with a small number of "check your spelling" and a larger number of “violation guidelines” notifications. To sum up, even with the same terminology and meaning, the experience of moderations in different countries are different.

<img alt="" src="https://lh6.googleusercontent.com/XUH4Sy1Grbq3HlgGNh-CJtsrdDMFgJ2ECkc4Juiccnsy2_Hzd0eG6eB4GD8S-ueX6BcVQ2iffT7Tw0v5pqdlVr93nbJLLD3z1tREBRrxSPWvPWlbH5Ql4qUYDmGbs-3uUw" width="624" height="423.9620900260179">

Figure 3. Type of moderation most used by TikTok in the selected countries.

When the various country graphs are juxtaposed, as shown in Figure 2, it is evident that the Middle Eastern countries show a similar use of the different types of ban, a similarity that is not so evident between the two South-East Asian countries analyzed (Thailand and Vietnam), which also are in close geographical proximity to each other.


<img alt="" src="https://lh5.googleusercontent.com/ul1knZoAUrhDZ8FzbMfZqjDYjHrifvFgbLgWbTEMIi8Nv1I_KJ_nWQHkWZDmRY4AGZlEeIkb-Q6Ur5koYvVdw2byYBBALwrnEfCQfDiNeTzkGKAvvZQMiXGArcEvDo6HeA" width="1000" height="400">

Figure 3. Type of ban associated with each keyword in the selected countries.

What emerges from the graph in Figure 3 is the inconsistency of the moderation policies across languages and geographies and the alignment with local rules, as in different locations, a certain pornographic term may be banned for different reasons. Most pornographic terms are banned because they are considered to be a violation of guidelines. Some of them are specifically categorized as associated with “hateful behaviors”, and others are considered as spelling mistakes.

An example demonstrating this inconsistency emerged from the policies applied in Poland: while the word "queer" is subject to a ban ("check your spelling"), unlike in most of the other countries analysed, where the word is free from restrictions, the synonym "fag", which in many other states is subject to a ban, shows available results in Poland.

An interesting case that can be observed from the same graph is represented by some specific queries associated with different sexual orientations: it emerges that the words "lesbian", "gay" and "gayguy" are subject to ban only in Israel, Saudi Arabia and Arab Emirates.

Another example of differences moderation policies between countries is the term "whore", which is associated with hateful behaviors in Israel, Vietnam, Saudi Arabia and the UAE, while in Argentina, Myanmar and the U.S., it is considered a general violation of guidelines, and in the Netherlands, it is considered a spelling mistake. The term "anal sex" is banned in most locations because of a general guideline violation, but in Myanmar and Thailand, the query shows no result because of spelling mistakes. The term "porn" is banned in all the locations we tested, but only in Vietnam, it is considered a spelling mistake. Although it is beyond the purpose and conclusions of this research, we can still guess that to some extent, the reason behind the different moderation types may be related to cultural and social differences.

<img alt="" src="https://lh4.googleusercontent.com/I7y2Z8FM-jhSiU1blK2969P9QAsY4O9ImiTvhhn5ywwvomASXL1wbxt8NW2VTeWyorR9cqt1gylRMVLZ7erVdWX5koJZpoyyVxXaB3h0f-lyJ1-ST-6VaZrqPZbwnsU93A" width="1000" height="290">

Figure 4. Type of ban associated with queries both in Arabic and English translations, in Middle East countries.

As we can see in Figure 4, moderation policies are similar in the Middle East countries. Indeed, when querying the list of pornographic terms in Israel, Saudi Arabia and the UAE, the results we get are quite similar and same terms are banned for mostly the same reasons, except for the term "sex" in the Arabic form, which is banned as “violation guidelines” in Saudi Arabia and the UAE, but considered a spelling mistake in Israel.

It is worth noting that while the term "whore" in Arabic is perceived as associated with “hateful behaviours” in all the three countries, the term "prostitute" (in both his Arabic and English translations) is not banned at all and when searching it, videos related to this term actually show up in the result page.

These three countries not only are geographically close to each other, but also have highly religious populations. So it is reasonable for TikTok to apply similar moderation policies in the three of them. However, in other regions such as Europe and Asia, we cannot find any obvious similarity in their moderation practices on pornographic terms.

However, when comparing the ban associated with the same keyword translated into two different languages, further differences in the moderation of the same content emerges, demonstrating the inconsistency of these policies. The words “gay” and “gayguy” are not banned in English, but are banned in Arabic. Furthermore, the word “gay” in its Arabic translation in Israel is subject to a “check your spelling” ban, and in Saudi Arabia and the United Arab Emirates to a “hateful behavior” ban.

<img alt="" src="https://lh6.googleusercontent.com/rN8JDvx3QfhDCWo8tpMkwrI0XUg8AmsargN906r7rRvbGIQb6nFDwj3eEVeMt4K8kU0cb80kmsnWXuScXvd4Ca_3nrcXfvPGw8y3pTzds97mX2q1E70YONQXVN_ru7zUSw" width="188.33928571428572" height="123.27586206896551">

<img alt="" src="https://lh3.googleusercontent.com/JMr9NUeYM_iF5H5nhmtCUAUSEDULnP3UB5NGIWfzWC9pYCv9u1Z-GMiLADju-1Vr7Bz6m1cH0o_Vv3Y24BQFnzFsq-oJ-Du2yELZbPptQCR8vC6arGmR0sEr0sG-7JevBQ" width="624" height="624">

Figure 6. Gephi network of all the banned keywords searched on the TikTok website in the local languages (translated in English here) and the type of ban associated with each of them in the selected countries.

Figure 6. shows more directly the similarities and differences among countries in the moderations in general, such as three countries in the Middle East converging on the image, which share more common banned search terms. Southeast Asian countries are also closer in the picture, with some words such as "ass" banned only in Vietnam and "Sex worker" banned only in Thailand. This picture further illustrates the scale of moderations in terms of regional connections and differences.

<img alt="" src="https://lh3.googleusercontent.com/YROJIel264ShkplKumTXW67d_MByOApi_XeV0_P8Q7BobFlaEoTZ36AzplyYhZcbN54KZkahqiSoMwr8QB2eWvBr7v8m7LH7bMJxBSRsDTXfs6j2ZnP0ciF0vv9u8uW2sQ" width="624" height="621">

Figure 7. Gephi network of all the keywords with available results searched on TikTok website in the local languages (translated in English here) in the selected countries.

<img alt="" src="https://lh6.googleusercontent.com/6qrZxJvQ_kqNtrmui05BKXaPsW6pPKvsa49IYaFBqRt86FcWsIjZsLywMR5r_5_EwCWqovCEw-V34HBTFSVAxfTh-hzjSFF_NwEw21Gqc5zSA1DSOl8aIF-xxOY00rKbPA" width="121" height="71">

Figure 7 illustrates the available pornographic terms on TikTok in the selected countries. In our study, 197 words in different languages are banned and 276 words give available results on TikTok. However, the available words are still under TikTok 's regulations and moderation, as in most cases the results are not relevant to the searching keywords in its pornographic meaning. For example, when we search the word "blowjob" in Vietnamese with Vietnam VPN, the results are contents of haircuts and hair dryers, which is influenced by the meaning and context of the word, and pornographic content is not shown on the result page.

Considering the shape of the graph, the more pornographic terms are allowed in a certain country, the bigger the node representing the country.

#### 4.1 TikTok and content moderation: Videos SHADOW-BAN

 **Data analysis** 

After conducting the experiment on TikTok and collecting the qualitative data, produced by the interactions on the platform, the network analysis software Gephi was used to identify the connections between the accounts recommended to the two different profiles created, one Israeli and one Palestinian, and the main differences between them.

The shape of the graphs run in Gephi were obtained from a layout setting on the ForceAtlas2 algorithm. Two types of nodes were set up in Gephi to implement the following networks: the countries where the experiment was conducted and the suggested accounts.

 **Israeli Accounts**

In order to obtain the cleanest findings without personalization, we iterated the methodology to tune it towards finding the maximum output. What was interesting to note is that throughout the infiltration to follow accounts from Israel, many were verified with millions of views, likes, and followers. As opposed to that of Palestine, accounts were harder to come across, and most had significantly less engagement. Both the accounts which followed Israeli accounts got recommendations for similar accounts they followed, which can be concluded that Tiktok in Israel encourages the activism content.

 **Palestinian Activist Accounts** 

As opposed to the Israeli accounts, the two accounts created to follow Palestinian activists got less engagement on the FYP, whilst they also did not get recommended to follow similar accounts. However, a counterintuitive finding perhaps might be the discovery of a lot of pro-Palestine videos when it was specifically searched for– but despite this, even after interactions with such content, no Palestinian activist content, even from the accounts that were followed.

From these observations, it can be inferred that Palestinean activist accounts are potentially an example of being shadowbanned. The hypothesis of the research project proves to be true and that using Israeli VPN results in the promotion of Israeli accounts, while the Palestinian activist accounts that are also followed do not show up on the FYP, indicating a possible shadowban.

**A Counterintuitive Pre-Finding** 

In the initial exploration for the project, queries related to the conflict were searched on TikTok, such as “Israel” and “#freepalestine”, through Israel’s VPN to have a sense of the TikTok environment. A counterintuitive finding was when searching “#freepalestine”, all the results were strongly pro-Palestine when the expectation was that we would not find much pro-Palestine content. However, this makes sense in the greater context of the project because while pro-Palestinian content was searchable, it still did not show up on the FYP, indicating a possible shadowban or moderation of such content.

**Comparative network analysis** 

Figure 8 presents a network analysis of the accounts recommended to the Israeli and Palestinian research profiles we created. The cluster in the middle represents overlapping accounts that were recommended to several of the research profiles. The Israeli research profiles appear to share several accounts that are recommended to them, including two pro-Israel accounts such as the IDF. On the other hand, the Palestinian research profiles get only one overlapping recommendation. None of the pro-Palestinian accounts that were followed in the research process appeared on the FYP, as reflected in the graph. It is also notable that during the initial research process, IDF-related accounts appeared to be more prominent on the FYP as compared to pro-Palestinian accounts. More specifically, Yael Deri, a prominent IDF soldier with over one million followers and who reenacts TikTok challenges and dances, appeared significantly more on the FYP during the research. However, Palestinian activist Muna El-Kurd did not appear on the FYP at all. The activist also has significantly fewer followers on TikTok as compared to her Instagram account with over a million followers.

<img alt="" src="https://lh6.googleusercontent.com/E0Zsyde662cf_79EngQ8xkPrtGn5Zj5G_syhiC8vAJg9FFmhsGfmFgxD9i-YUEPIj73uQf5Ac9wcZv3JCiF0eXTw9QBnuwpO9Nh14Nw8FNmqNFshVvt-SkySVIZ-lkUHag" width="845.9906" height="635.8909207193255">

Figure 8. Network analysis of recommended accounts to the Israeli and Palestinian profiles.

### Discussion

This initial research indicates a possible shadowban of pro-Palestinian content on the FYP based in Israel. The proof of this shadowban would identify and reflect a significant political ban. The approach we took of ‘manipulating’ the FYP allowed us to discover any potential shadowban of certain content and accounts. Furthermore, this research on shadowbanning could support the accusations of political activists who claim to be victims of this censorship. However, exposing a shadowban is difficult due to other factors that may be involved, such as engagement metrics and the platform recommending more entertaining rather than political content. We also expected to find more graphic or violent content but this was very limited. Furthermore, future research could expand the methodology by incorporating more accounts to follow on both sides or focusing on a specific account that believes it is shadowbanned. By testing this procedure on a single, potentially shadowbanned account, we could monitor the page across time and make a more reliable conclusion.

Next to that, TikTok and specifically its FYP encourages the notion of filter bubbles. Previous research has indicated the role of social media in creating such filter bubbles, or the increased visibility of content that confirms and aligns with the user’s views and ideas. Our findings (see figure 1) reflect this phenomenon in the case of the pro-Israeli research profiles which get recommended pro-Israeli accounts. Some of the recommended content seems to be reflecting the followed accounts. On the other hand, pro-Palestinian content was not recommended to the other research profiles. The shaping of filter bubbles may contribute to political polarization by enforcing one’s views and outlook of the world, and also has the potential to shape the public debate and political decision making. In the Palestinian and Israeli case, a filter bubble based on the pro-Israel account and the use of political propaganda on the platform could have political implications.

The contrast between the focus of political propaganda was one that could not go unnoticed. The two countries seem to have their own strategy, however, pro-Israelian accounts focus more on military content, and at times even create lighthearted content from soldiers such as that from @yaelderiofficial or @nataliafadeev. On the other end of the spectrum, Pro-Palestine accounts focus more on the abuse the country is under. The emotional videos of children being taken away from their parents, and military attacks on the country, are more focused on the reality of it all.

Although we focused on a single political controversy, the methodology can be improved and further developed to identify and analyze other potential bans. It is also relevant to conduct a cross-national comparison that explores whether the shadowban of pro-Palestinian content is unique to Israel or a general ban on TikTok. This can help understand if the shadowban is a regional phenomenon, or if the ban is applicable across different countries.

In terms of content quality and recommendation strategy, the underlying logic of TikTok is to strike a balance between legitimate compliance and the demands of the users. The legitimate compliance can be divided into two parts: on the one hand, as the parent company of TikTok, Bytedance, based in China, thus much of its content is subject to censorship by the Chinese government. And on the other hand, in order to prevent content from violating relevant laws and regulations in the consuming country, and to prevent apps from being pulled from the app store or being subject to legal penalties, there is also self-censorship based on the laws in the consuming country. The results of this research clearly show that due to the differences in legal and religious acceptance of content (such as nudity and sexual behaviour related videos in this case), the platform affords varying degrees of ban to legitimize the app in the dimension of the search function. According to the results, English appears to be the standard for banning worldwide, while there are also language-specific bannings depending on cultural context, which reflects the fact that in the mechanism of moderation, overall compliance is followed by adjustments in accordance with national laws and cultural contexts.

To meet users' demands, Although TikTok has its proud recommendation algorithm, which judges users' interests based on their behavior, it does not satisfy the platform's demands of controlling the content ecosystem. Quoting ByteDance 's internal understanding of platform ecology, if the state does not legislate, gambling and drug abuse will be rampant, so does a platform. Thus, they believe that human beings' demands are various, including physiological and psychological demands, also vulgar and elegant demands. If contents are just left unchecked, attention-grabbing content such as pornographic videos can flood the app's content ecosystem, which would briefly stimulate the user's senses but would not satisfy the various demands of the users for long. The concept of ban and shadow ban was introduced because user behavior alone may not be enough to solve the problem of content quality. This study is a direct attempt to label search restrictions, which are more direct and broad-based than restrictions on a single video or certain keywords, and can also be considered a more severe version of moderation. This restriction is reflected in searches that, on the one hand, limit users' direct access to sexually explicit content and, on the other hand, make video producers aware of what content is not encouraged by the platform.

However, there are still unavoidable limitations in this study. Although search results indicate that there are varying degrees of ban for different content, it seems impossible to understand the more specific aspect of moderation in this methodology. Moderation rules are quite skimpy: according to the source, they fit into a table just a few pages long (Reuter &amp; Köver, 2019), but to understand the detailed classification of the moderation rules may require analysis of a large number of different specific cases. Moreover, keyword-based research has struggled to fully explore the duo-audit moderation mechanism of TikTok (Wang, 2020), which tends to weed out pornography by grabbing pictures and testing them with the machine models during the first round of machine moderation. Keywords may only play a supporting role in the second round of the moderation, which may not be decisive for the ban. Also, since the study participants were not native speakers in the target country, there may be some semantic biases in keyword selection and translation that may influence the results.

In conclusion, this research maps the prohibition in different countries for some sensitive content with pornography by means of search on TikTok, which opens the conversation for further research into the TikTok moderation mechanism. How does the platform deal with the content in the search dimension on other sensitive topics, or in another case, the search results are not relevant to the search term (although there are no restrictions in the search dimension, the relevant content has been banned by the platform), these are all further potential exploration of international video platform moderation mechanisms, such as TikTok, which has long been more than a singing and dancing space for self-representation; it has increasingly become an important space for political discourse and social activism. It would therefore be worthwhile to do more research on its non-transparent moderations and its influences.

### 6. Conclusions

#### 6.1 Implications 

The goal of the research was to analyze the mechanisms for regulating content on TikTok, in an attempt to label these restrictions. In order to study in which way moderation policies are applied on the platform, the investigation has been focused on content related to two different sensitive topics: pornographic content on the one hand, and content with political implications on the other. Although the methodology applied to the study of the two thematic areas and the data collected on them are quite different, both methods used were useful to extract new information from the overall research, trying to extend the analysis to as many interfaces as possible, present on the platform (FYP and search results).

In terms of content quality and recommendation strategy, the underlying logic of TikTok is to strike a balance between legitimate compliance and user demands. Legitimate compliance can be divided into two parts: on the one hand, as TikTok 's parent company, Bytedance, based in China, thus much of its content is subject to censorship by the Chinese government; and on the other hand, in order to prevent content from violating relevant laws and regulations in the country of consumption, and to prevent apps from being withdrawn from the app store or being subject to legal penalties, also self-censorship based on the laws of the individual country of consumption is applied. The results of this research clearly show that due to differences in legal, political, and religious acceptance of content, the platform offers varying degrees of banning to legitimize the app in the size of the search function, and the algorithm influences what to show and what not to show.

Regarding banning, according to the results, English seems to be the standard for banning worldwide, while there are also language-specific bans depending on cultural contexts, which confirms the fact that in the moderation mechanism, general compliance is followed by adjustments based on national laws and cultural contexts.

On the other hand, as for TikTok 's recommendation algorithm, which judges users' interests based on their behavior, with the aim of proposing satisfactory content to the individual on their FYP, it would not be able to meet the platform's demands to control the content ecosystem without proper moderation. Quoting ByteDance 's internal understanding of platform ecology, if the state does not legislate, gambling and drug abuse will be rampant, so does a platform.

So if content is left unchecked, the content that would attract attention may not reflect the quality the platform expects to achieve. This is why the concepts of ban and shadow ban were introduced.

This is particularly relevant not only with regard to sexually explicit content, which could capture the attention of many users, but also for example for certain political content, especially in certain geographical areas experiencing critical political situations.

In this regard, the experiment conducted with the aim of probing the mechanisms by which shadowban is applied in different geopolitical contexts, finds a potential shadowban of Palestinian activist content and the promotion of IDF-related TikToks showing up on FYP from an Israeli VPN. This is significant because the FYP is the primary landing page of TikTok and consequently can contribute in shaping cultural values. Our results imply that the Israeli FYP promotes local content and shadowbans Palestinian activists accounts.

 #### 6.2 Limitations
 

However, there are still unavoidable limitations to this study. Although the research findings indicate that there are varying degrees of banning for different content, it seems impossible to understand the more specific aspects of moderation with this methodology. The stated moderation rules are rather sparse: according to the source, they fit into a table of a few pages (Reuter &amp; Köver, 2019). But understanding the detailed classification of moderation rules might require the analysis of a large number of different specific cases.

Moreover, keyword-based research has struggled to fully explore the duo-audit moderation mechanism of TikTok (Wang, 2020), which tends to weed out pornography by grabbing pictures and testing them with the machine models during the first round of machine moderation. Keywords may only play a supporting role in the second round of the moderation, which may not be decisive for the ban. Also, since the study participants were not native speakers in the target country, there may be some semantic biases in keyword selection and translation that may influence the results.

Also, because the shadowban on TikTok is mostly unexplored, there are many suggestions for future research that may focus on other contexts than the Palestinian geopolitical context. For example, there are many complaints from queer and plus-size TikTok creators that their content is being unfairly shadowbanned, which is an area largely unexplored in academic content but that has large societal significance. In this case, it would be useful to monitor accounts that suspect they have been shadowbanned. Finally, the development of methodologies to detect shadowbanning practices could take another approach for future research. In this particular study, the FYP feed was the main source of data. However, this page can be quite chaotic to analyze given its unpredictability and ambiguity regarding their recommendation process. Therefore, another section of TikTok could be further investigated.

Therefore, a much larger study, taking another section of TikTok into analysis, may be able to more accurately demonstrate the implications of this research.

#### 6.3 Conclusions 

This exploratory research project has produced significant findings both in the attempt of mapping the prohibition in different countries of certain pornography-sensitive content, and from a political and methodological perspective, thus opening the conversation for further research on the TikTok moderation mechanism, demonstrating that TikTok 's ban and shadowban is researchable, and that TikTok 's FYP is an area of study with ample scope for further exploration.

How does the platform deal with the content in the search dimension on other sensitive topics could be a further potential exploration of this international video platform moderation mechanisms, which has long been more than a singing and dancing space for self-representation, increasingly becoming an important space for political discourse and social activism, in some cases being a primary source of news for many people. It would therefore be worthwhile to do more research on its non-transparent moderations and its influences.

### 8. References
Are, C. (2021). The shadowban cycle: An autoethnography of pole dancing, Nudity and censorship on Instagram. Feminist Media Studies, 1–18. <a href="https://doi.org/10.1080/14680777.2021.1928259" rel="nofollow">https://doi.org/10.1080/14680777.2021.1928259</a>

Biddle, S., Ribeiro, P. V., &amp; Dias, T. (2020, March 16). TikTok told moderators: Suppress posts by the "ugly" and poor. The Intercept. Retrieved January 31, 2022, from <a href="https://theintercept.com/2020/03/16/tiktok-app-moderators-users-discrimination/" rel="nofollow">https://theintercept.com/2020/03/16/tiktok-app-moderators-users-discrimination/</a>

Dean, B. (2022, January 5). Tiktok User Statistics (2022). Backlinko. Retrieved January 31, 2022, from <a href="https://backlinko.com/tiktok-users" rel="nofollow">https://backlinko.com/tiktok-users</a>

Hern, A. (2020, March 17). Tiktok 'tried to filter out videos from ugly, poor or disabled users'. The Guardian. Retrieved January 31, 2022, from <a href="https://www.theguardian.com/technology/2020/mar/17/tiktok-tried-to-filter-out-videos-from-ugly-poor-or-disabled-users" rel="nofollow">https://www.theguardian.com/technology/2020/mar/17/tiktok-tried-to-filter-out-videos-from-ugly-poor-or-disabled-users</a>

Joslin, T. (2020, May 21). Black creators protest TikTok 's algorithm with #imblackmovement. The Daily Dot. Retrieved January 31, 2022, from <a href="https://www.dailydot.com/irl/tiktok-protest-imblackmovement/" rel="nofollow">https://www.dailydot.com/irl/tiktok-protest-imblackmovement/</a>

Reuter, M. and Köver, C. (2019, November 23). Cheerfulness and censorship. Netzpolitik.org. Retrieved 20 January, 2022, from <a href="https://netzpolitik.org/2019/cheerfulness-and-censorship/" rel="nofollow">https://netzpolitik.org/2019/cheerfulness-and-censorship/</a>

Poell, T., Nieborg, D. B., &amp; Duffy, B. E. (2022). Platforms and cultural production. Polity Press.

Wang, C. (2020, June 7). Why TikTok made its user so obsessive? The AI Algorithm that got you hooked. Medium. Retrieved 20 January, 2022, from <a href="https://towardsdatascience.com/why-TikTok-made-its-user-so-obsessive-the-ai-algorithm-that-got-you-hooked-7895bb1ab423" rel="nofollow">https://towardsdatascience.com/why-TikTok-made-its-user-so-obsessive-the-ai-algorithm-that-got-you-hooked-7895bb1ab423


