﻿function findSvtNameZh(searchId)
{
	var i;
	for(i=0;i<svtName.length;i++)
		if(svtName[i][0]==searchId) return svtName[i][1];
	return null;
}

var svtName = [["100100","阿爾托莉亞・潘德拉剛","阿爾托莉亞"],["100200","阿爾托莉亞・潘德拉剛〔Alter〕","阿爾托莉亞(Alter)"],["100300","阿爾托莉亞・潘德拉剛〔Lily〕","阿爾托莉亞(Lily)"],["100500","尼祿・克勞狄烏斯","尼祿"],["100800","齊格飛","齊格飛"],["101300","蓋烏斯・尤利烏斯・凱撒","凱撒"],["101400","弗格斯・馬克・羅伊","弗格斯"],["101800","阿提拉","阿提拉"],["102200","吉爾・德・雷","吉爾(Saber)"],["102600","夏爾・德翁","德翁"],["102700","沖田總司","沖田總司"],["200100","Emiya","Emiya"],["200200","吉爾伽美什","吉爾伽美什"],["200300","羅賓漢","羅賓漢"],["200500","阿塔蘭塔","阿塔蘭塔"],["200600","大衛","大衛"],["200900","俄里翁","俄里翁"],["201200","尤瑞艾莉","尤瑞艾莉"],["201300","阿拉什","阿拉什"],["202400","織田信長","織田信長"],["300100","庫・夫林","庫・夫林"],["300200","迪爾姆德・奧德利暗","迪爾姆德"],["300500","伊莉莎白・巴托里","伊莉莎白"],["300600","武藏坊弁慶","武藏坊弁慶"],["300700","庫・夫林〔Prototype〕","庫・夫林(Prototype)"],["300900","雷奧尼達一世","雷奧尼達"],["301000","羅慕路斯","羅慕路斯"],["301300","斯卡哈","斯卡哈"],["301600","赫克特","赫克特"],["400100","美杜莎","美杜莎"],["400300","弗朗西斯・德雷克","德雷克"],["400600","聖喬治","聖喬治"],["400800","愛德華・蒂奇","愛德華・蒂奇"],["400900","安妮・伯妮＆瑪莉・瑞德","安妮・伯妮＆瑪莉・瑞德"],["401100","布狄卡","布狄卡"],["401400","牛若丸","牛若丸"],["401500","亞歷山大","亞歷山大"],["401700","瑪莉・安東尼","瑪莉・安東尼"],["401900","瑪爾大","瑪爾大"],["500100","美狄亞","美狄亞"],["500200","吉爾・德・雷","吉爾・德・雷"],["500300","玉藻前","玉藻前"],["500500","漢斯・克里斯蒂安・安徒生","安徒生"],["500600","威廉・莎士比亞","莎士比亞"],["501400","梅菲斯托費勒斯","梅菲斯托費勒斯"],["501500","沃夫岡・阿瑪迪斯・莫札特","莫札特"],["501700","美狄亞〔Lily〕","美狄亞(Lily)"],["501900","諸葛孔明〔埃爾梅羅II世〕","諸葛孔明"],["502100","庫・夫林","庫・夫林(Caster)"],["502600","伊莉莎白・巴托里〔萬聖節〕","伊莉莎白(萬聖節)"],["600100","佐佐木小次郎","佐佐木小次郎"],["600200","咒腕的哈桑","咒腕的哈桑"],["601000","絲西娜","絲西娜"],["601100","荊軻","荊軻"],["601200","夏爾＝亨利・桑松","桑松"],["601300","歌劇魅影","歌劇魅影"],["601400","瑪塔・哈里","瑪塔・哈里"],["601700","卡米拉","卡米拉"],["700100","海克力斯","海克力斯"],["700200","蘭斯洛特","蘭斯洛特"],["700300","呂布奉先","呂布奉先"],["700500","斯巴達克斯","斯巴達克斯"],["700600","坂田金時","坂田金時"],["700700","弗拉德三世","弗拉德三世"],["700900","阿斯忒里歐","阿斯忒里歐"],["701000","卡利古拉","卡利古拉"],["701100","大流士三世","大流士三世"],["701300","清姬","清姬"],["701500","血斧・埃里克","埃里克"],["701600","玉藻貓","玉藻貓"],["800100","瑪琇・基利艾拉特","瑪琇"],["900100","貞德","貞德"],["900300","貞德〔Alter〕","貞德(Alter)"]];

var tdDetail = [["100101","對敵全體的強力攻擊[Lv.] ＋ 自身的NP再累積<OverCharge的話效果UP>","300%/400%/450%/475%/500%","20%/27.5%/35%/42.5%/50%","",""],["100102","對敵全體的強力攻擊[Lv.] ＋ 自身的NP再累積<OverCharge的話效果UP>","400%/500%/550%/575%/600%","20%/27.5%/35%/42.5%/50%","",""],["100201","對敵全體非常強力攻擊[Lv.] ＋ 自身的NP少量再累積<OverCharge的話效果UP>","450%/550%/600%/625%/650%","10%/15%/20%/25%/30%","",""],["100301","對敵全體的強力攻擊[Lv.] ＋ 自身的HP大回復<OverCharge的話效果UP>","300%/400%/450%/475%/500%","1000/2000/3000/4000/5000","",""],["100501","對敵全體的強力防禦力無視攻擊[Lv.]＆防禦力下降(1回合)<OverCharge的話效果UP>","450%/600%/675%/712.5%/750%","20%/25%/30%/35%/40%","",""],["100502","對敵全體的強力防禦力無視攻擊[Lv.]＆防禦力下降(1回合)<OverCharge的話效果UP>","600%/750%/825%/862.5%/900%","20%/25%/30%/35%/40%","",""],["100801","對敵全體的強力攻擊[Lv.] ＋ 〔龍〕特攻<OverCharge的話威力UP>","300%/400%/450%/475%/500%","150%/162.5%/175%/187.5%/200%","",""],["101301","對敵單體的超強力攻擊[Lv.] ＋ 星星獲得<OverCharge的話效果UP>","1200%/1600%/1800%/1900%/2000%","5/10/15/20/25","",""],["101401","對敵全體的強力攻擊[Lv.]＆防禦力下降(3回合)＆弱體耐性下降(3回合)<OverCharge的話效果UP>","300%/400%/450%/475%/500%","20%","20%/30%/40%/50%/60%",""],["101801","對敵全體的強力攻擊[Lv.]＆防禦力下降(3回合)<OverCharge的話效果UP>","300%/400%/450%/475%/500%","10%/15%/20%/25%/30%","",""],["101802","對敵全體的強力攻擊[Lv.]＆防禦力下降(3回合)<OverCharge的話效果UP>","400%/500%/550%/575%/600%","10%/15%/20%/25%/30%","",""],["102201","自身的攻擊力大提升[Lv.](2回合)＆防禦力大下降(3回合)【副作用】 ＋ 星星獲得<OverCharge的話效果UP>","50%/75%/87.5%/93.8%/100%","50%","5/10/15/20/25",""],["102601","對敵全體以機率賦予魅惑(1回合)<OverCharge的話機率UP>＆攻擊力下降(2回合)[Lv.]＆防禦力下降(2回合)[Lv.]","10%/20%/30%/40%/50%","10%/20%/25%/27.5%/30%","10%/20%/25%/27.5%/30%",""],["102701","對敵單體的超強力防禦力無視攻擊[Lv.]＆防禦力下降大(3回合)<OverCharge的話效果UP>","1200%/1600%/1800%/1900%/2000%","30%/40%/45%/47.5%/50%","",""],["200101","對敵全體的強力防禦力無視攻擊[Lv.]＆攻擊力下降(3回合)<OverCharge的話效果UP>","300%/400%/450%/475%/500%","10%/15%/20%/25%/30%","",""],["200102","對敵全體的強力防禦力無視攻擊[Lv.]＆攻擊力下降(3回合)<OverCharge的話效果UP>","400%/500%/550%/575%/600%","10%/15%/20%/25%/30%","",""],["200201","對敵全體的強力攻擊[Lv.] ＋ 〔Servant〕特攻[特別是對持有星之力的Servant特攻無效]<OverCharge的話威力UP>","300%/400%/450%/475%/500%","150%/162.5%/175%/187.5%/200%","",""],["200202","對敵全體的強力攻擊[Lv.] ＋ 〔Servant〕特攻[特別是對持有星之力的Servant特攻無效]<OverCharge的話威力UP>","400%/500%/550%/575%/600%","150%/162.5%/175%/187.5%/200%","",""],["200301","對敵單體的超強力攻擊[Lv.] ＋ 〔毒〕特攻<OverCharge的話效果UP>＆賦予毒(5回合)","900%/1200%/1350%/1425%/1500%","200%/212.5%/225%/237.5%/250%","500",""],["200501","對敵全體的強力攻擊[Lv.] ＋ 星星獲得<OverCharge的話效果UP>","600%/800%/900%/950%/1000%","10/15/20/25/30","",""],["200601","對自身賦予必中(1回合) ＋ 對敵單體的超強力攻擊[Lv.]＆以高機率技能封印(1回合)<OverCharge的話機率UP>","必中：無視迴避給予傷害","600%/800%/900%/950%/1000%","10%/12.5%/15%/17.5%/20%",""],["200901","對敵單體的強力攻擊[Lv.]＆攻擊力下降大(3回合)＆NP以中機率減少<OverCharge的話機率提升>","900%/1200%/1350%/1425%/1500%","20%","60%/70%/80%/90%/100%",""],["201201","對敵單體超強力攻擊 ＋ 〔男性〕特攻[Lv.]＆以高機率賦予魅惑[男性限定](1回合)<OverCharge的話機率UP>＆攻擊力下降(3回合)","900%","150%/200%/225%/237.5%/250%","100%/125%/150%/175%/200%","20%"],["201202","對敵單體超強力攻擊 ＋ 〔男性〕特攻[Lv.]＆以高機率賦予魅惑[男性限定](1回合)<OverCharge的話機率UP>＆攻擊力下降(4回合)","1200%","150%/200%/225%/237.5%/250%","100%/125%/150%/175%/200%","20%"],["201301","對敵全體的超強力攻擊[Lv.] ＋ <OverCharge的話威力UP> ＋ 對自身即死效果【副作用】","600%/800%/900%/950%/1000%","0%/100%/200%/300%/400%","500%",""],["202401","對敵全體的強力攻擊 ＋ 〔騎乘技能〕特攻<OverCharge的話威力UP>","300%/400%/450%/475%/500%","150%/162.5%/175%/187.5%/200%","",""],["300101","對敵單體的超強力攻擊[Lv.]＆防禦力下降(3回合)<OverCharge的話效果UP>＆中機率即死效果<OverCharge的話機率UP>","1200%/1600%/1800%/1900%/2000%","50%/62.5%/75%/87.5%/100%","10%/15%/20%/25%/30%",""],["300201","對敵單體的超強力攻擊[{0}]＆強化解除＆賦予詛咒(5回合)<OverCharge的話效果UP>","1200%/1600%/1800%/1900%/2000%","","500/750/1000/1250/1500",""],["300501","對敵全體的強力防禦力無視攻擊[Lv.]＆賦予詛咒(3回合)<OverCharge的話效果UP>","300%/400%/450%/475%/500%","500/1000/1500/2000/2500","",""],["300601","對敵全體以機率賦予石化＆賦予詛咒(3回合)[Lv.]<OverCharge的話效果UP>","50%/65%/72.5%/76.3%/80%","500/1000/1500/2000/2500","",""],["300701","對敵單體的超強力攻擊[Lv.]＆防禦力下降(3回合)<OverCharge的話效果UP>＆中機率即死效果<OverCharge的話機率UP>","1200%/1600%/1800%/1900%/2000%","50%/62.5%/75%/87.5%/100%","10%/15%/20%/25%/30%",""],["300901","自身的防禦力大提升(3回合)<OverCharge的話效果UP>＆賦予目標集中狀態(3回合) ＋ 星星獲得[Lv.]","30%/35%/40%/45%/50%","容易被敵人瞄準目標","5/15/20/23/25",""],["301001","對敵全體的強力攻擊[Lv.] ＋ 我方全體的攻擊力提升(3回合)<OverCharge的話效果UP>","300%/400%/450%/475%/500%","10%/15%/20%/25%/30%","",""],["301301","對敵單體賦予石化＆超強力攻擊[{0}]＆中機率即死效果<Overcharge的話機率UP>","","1200%/1600%/1800%/1900%/2000%","50%/62.5%/75%/87.5%/100%",""],["301601","對敵全體的強力防禦力無視攻擊[Lv.] ＋ 防禦力DOWN(3回合)<OverCharge的話效果UP>","300%/400%/450%/475%/500%","20%/25%/30%/35%/40%","",""],["301602","對敵全體的強力防禦力無視攻擊[Lv.] ＋ 防禦力DOWN(3回合)<OverCharge的話效果UP>","400%/500%/550%/575%/600%","20%/25%/30%/35%/40%","",""],["400101","對敵全體的強力攻擊[Lv.] ＋ 我方全體的星星發生提升(3回合)<OverCharge的話效果UP>","600%/800%/900%/950%/1000%","20%/30%/40%/50%/60%","",""],["400301","對敵全體的強力攻擊[Lv.] ＋ 星星大量獲得<OverCharge的話效果UP>","300%/400%/450%/475%/500%","20/25/30/35/40","",""],["400302","對敵全體的強力攻擊[Lv.] ＋ 星星大量獲得<OverCharge的話效果UP>","400%/500%/550%/575%/600%","20/25/30/35/40","",""],["400601","對敵單體賦予〔龍〕特性＆超強力攻擊[Lv.] ＋ 自身的防禦力大提升(1回合)<OverCharge的話效果UP>","900%/1200%/1350%/1425%/1500%","20%/25%/30%/35%/40%","",""],["400801","對敵全體的強力攻擊[Lv.]＆以低機率減少NP<OverCharge的話機率UP> ＋ 星星獲得","300%/400%/450%/475%/500%","30%/40%/50%/60%/70%","5",""],["400901","對敵單體的超強力攻擊[Lv.] ＋ 自身HP越少威力越高<OverCharge的話威力UP><br>乘上(0-現在HP/最大HP)","1200%/1600%/1800%/1900%/2000%","1200%/1400%/1600%/1800%/2000%","",""],["400902","對敵單體的超強力攻擊[Lv.] ＋ 自身HP越少威力越高<OverCharge的話威力UP><br>乘上(1-現在HP/最大HP)","1600%/2000%/2200%/2300%/2400%","1200%/1400%/1600%/1800%/2000%","",""],["401101","我方全體的防禦力提升[Lv.](3回合)＆防禦力大提升(1回合)<OverCharge的話效果UP>","10%/15%/17.5%/18.8%/20%","20%/25%/30%/35%/40%","",""],["401401","對敵單體的超強力攻擊[Lv.] ＋ 自身的星星發生提升大(3回合)<OverCharge的話效果UP>","1200%/1600%/1800%/1900%/2000%","50%/60%/70%/80%/90%","",""],["401402","對敵單體的超強力攻擊[Lv.] ＋ 自身的星星發生提升大(3回合)<OverCharge的話效果UP>","1600%/2000%/2200%/2300%/2400%","50%/60%/70%/80%/90%","",""],["401501","對敵全體的強力攻擊[Lv.] ＋ 星星獲得<OverCharge的話效果UP>","600%/800%/900%/950%/1000%","5/10/15/20/25","",""],["401701","對敵全體的強力攻擊[Lv.] ＋ 我方全體的HP回復<OverCharge的話效果UP>＆弱體解除","600%/800%/900%/950%/1000%","500/1000/1500/2000/2500","",""],["401901","對敵全體的強力攻擊[Lv.]＆防禦力大下降(3回合)<OverCharge的話效果UP>","300%/400%/450%/475%/500%","20%/25%/30%/35%/40%","",""],["500101","對敵單體的強力攻擊[Lv.]＆強化全解除 ＋ 自身的NP再累積<OverCharge的話效果UP>","450%/600%/675%/712.5%/750%","20%/40%/60%/80%/100%","",""],["500201","對敵全體的強力攻擊[Lv.]＆攻擊力下降(3回合)<OverCharge的話效果UP>","300%/400%/450%/475%/500%","20%/25%/30%/35%/40%","",""],["500301","我方全體的技能冷卻減少1＆HP回復[Lv.]＆NP增加<OverCharge的話效果UP>","","1000/1500/1750/1875/2000","25%/31.25%/37.5%/43.75%/50%",""],["500302","我方全體的技能冷卻減少1＆HP回復[Lv.]＆NP增加<OverCharge的話效果UP>","","2000/2500/2750/2875/3000","25%/31.25%/37.5%/43.75%/50%",""],["500501","對我方全體以[Lv.] ＋ 隨機賦予攻擊力提升＆隨機防禦力提升＆每回合ＨＰ回復(各3回合)<OverCharge的話各效果UP>","60%/70%/75%/77.5%/80%","20%/25%/30%/35%/40%","20%/25%/30%/35%/40%","1000/1500/2000/2500/3000"],["500701","對敵全體的強力攻擊[Lv.]＆以低機率賦予石化<OverCharge的話機率UP>","300%/400%/450%/475%/500%","30%/35%/40%/45%/50%","",""],["501401","對敵全體的強力防禦力無視攻擊[Lv.]＆以低機率賦予詛咒[Lv.](3回合) ＋ <OverCharge的話效果UP>","300%/400%/450%/475%/500%","50%/65%/72.5%/76.3%/80%","500/1000/1500/2000/2500",""],["501501","對敵全體以[Lv.] ＋ 隨機賦予攻擊力下降＆隨機防禦力下降＆詛咒(各3回合)<OverCharge的話各效果UP>","60%/70%/75%/77.5%/80%"," 20%/25%/30%/35%/40%"," 20%/25%/30%/35%/40%","500/1000/1500/2000/2500"],["501701","我方全體的弱體狀態解除＆HP大回復[Lv.]＆弱體耐性大提升<OverCharge的話效果UP>","","3000/4000/4500/4750/5000","20%/40%/60%/80%/100%",""],["501901","對敵全體減少NP[Lv.]＆以中機率賦予石化<OverCharge的話效果UP>＆賦予詛咒(3回合)＆防禦力下降(3回合)","20%","50%/57.5%/65%/72.5%/80%","500","10%/15%/20%/25%/30%"],["501902","對敵全體減少NP[Lv.]＆以中機率賦予石化<OverCharge的話效果UP>＆賦予詛咒(6回合)＆防禦力下降大(3回合)","20%","50%/57.5%/65%/72.5%/80%","1000","30%/40%/45%/47.5%/50%"],["502101","對敵全體的強力攻擊[Lv.]＆防禦力下降(3回合)<OverCharge的話效果UP>＆賦予燒傷(3回合)<OverCharge的話效果UP>","300%/400%/450%/475%/500%","10%/15%/20%/25%/30%","300/600/900/1200/1500",""],["502601","對敵全體的強力防禦力無視攻擊[Lv.]＆賦予詛咒(3回合)<OverCharge的話效果UP>","300%/400%/450%/475%/500%","500/1000/1500/2000/2500","",""],["600101","對敵單體的超強力攻擊[Lv.] ＋ 星星大量獲得<OverCharge的話效果UP>","1200%/1600%/1800%/1900%/2000%","15/20/25/30/35","",""],["600201","對敵單體的超強力攻擊[Lv.]＆高機率即死效果<OverCharge的話機率UP>","1200%/1600%/1800%/1900%/2000%","80%/90%/100%/110%/120%","",""],["601001","對敵單體高機率即死效果[男性限定][Lv.]＆賦予魅惑[男性限定]<OverCharge的話機率UP>＆防禦力下降(3回合)","100%/125%/137.5%/143.8%/150%","100%/125%/150%/175%/200%","20%",""],["601101","對敵單體的超強力攻擊[Lv.]＆中機率即死效果<OverCharge的話機率UP> ＋ 星星大量獲得<OverCharge的話效果UP> ＋ 自身的HP減少【副作用】","1200%/1600%/1800%/1900%/2000%","50%/62.5%/75%/87.5%/100%","30","1000"],["601201","對敵單體的超強力攻擊[Lv.]＆低機率即死效果<OverCharge的話機率UP>＆防禦力下降(3回合)<OverCharge的話效果UP>","600%/800%/900%/950%/1000%","30%/42.5%/55%/67.5%/80%","20%/25%/30%/35%/40%",""],["601301","對敵全體的強力防禦力無視攻擊[Lv.]＆弱體耐性下降(3回合)<OverCharge的話效果UP>","450%/600%/675%/712.5%/750%","20%/30%/40%/50%/60%","",""],["601302","對敵全體的強力防禦力無視攻擊[Lv.]＆弱體耐性下降(6回合)<OverCharge的話效果UP>","600%/750%/825%/862.5%/900%","50%/62.5%/75%/87.5%/100%","",""],["601401","對敵全體以中機率賦予魅惑[Lv.]＆攻擊力下降大(1回合)<OverCharge的話效果UP>＆防禦力下降大(1回合)<OverCharge的話效果UP>","40%/50%/55%/57.5%/60%","20%/25%/30%/35%/40%","20%/25%/30%/35%/40%",""],["601701","對敵單體超強力攻擊[Lv.] ＋ 〔女性〕特攻<OverCharge的話效果UP> ＋ 自身的HP大回復＆攻擊力提升(3回合)","600%/800%/900%/950%/1000%","120%/132.5%/145%/157.5%/170%","2000",""],["700101","對敵單體的超強力攻擊[Lv.]＆防禦力下降(3回合)<OverCharge的話效果UP>","600%/800%/900%/950%/1000%","10%/15%/20%/25%/30%","",""],["700201","自身的攻擊力提升(3回合)<OverCharge的話效果UP> ＋ 對敵全體的強力攻擊[Lv.]","10%/15%/20%/25%/30%","600%/800%/900%/950%/1000%","",""],["700301","對敵單體超強力防禦力無視攻擊[Lv.]＆以低機率賦予石化<OverCharge的話機率UP>","600%/800%/900%/950%/1000%","30%/40%/50%/60%/70%","",""],["700501","對敵全體的強力防禦力無視攻擊[Lv.] ＋ 自身的HP大回復<OverCharge的話效果UP>","300%/400%/450%/475%/500%","3000/4000/5000/6000/7000","",""],["700601","對敵單體超強力防禦力無視攻擊[Lv.]＆以中機率賦予石化<OverCharge的話機率UP>","600%/800%/900%/950%/1000%","50%/62.5%/75%/87.5%/100%","",""],["700602","對敵單體超強力防禦力無視攻擊[Lv.]＆以中機率賦予石化<OverCharge的話機率UP>","700%/900%/1000%/1050%/1100%","50%/62.5%/75%/87.5%/100%","",""],["700701","對敵單體的超強力攻擊[Lv.] ＋ 星星大量獲得<OverCharge的話效果UP>","600%/800%/900%/950%/1000%","15/20/25/30/35","",""],["700702","對敵單體的超強力攻擊[Lv.] ＋ 星星大量獲得<OverCharge的話效果UP>","700%/900%/1000%/1050%/1100%","15/20/25/30/35","",""],["700901","敵全體的攻擊力下降[Lv.](6回合)＆防禦力下降(6回合)<OverCharge的話效果UP>","10%/15%/17.5%/18.8%/20%","10%/20%/25%/27.5%/30%","",""],["700902","敵全體的攻擊力下降[Lv.](6回合)＆防禦力下降(6回合)<OverCharge的話效果UP>＆攻擊力下降大(1回合)＆防禦力下降大(1回合)","10%/15%/17.5%/18.8%/20%","10%/20%/25%/27.5%/30%","40%","40%"],["701001","對敵全體以高機率賦予技能封印[Lv.](3回合)＆以高機率賦予寶具封印(3回合)<OverCharge的話機率UP>","100%/125%/137.5%/143.8%/150%","70%/75%/80%/85%/90%","",""],["701101","對敵全體的強力攻擊[Lv.]＆攻擊力下降(3回合)<OverCharge的話效果UP>＆防禦力下降(3回合)<OverCharge的話效果UP>","300%/400%/450%/475%/500%","10%/15%/20%/25%/30%","10%/15%/20%/25%/30%",""],["701301","對敵全體的強力攻擊[Lv.]＆以低機率賦予石化<OverCharge的話機率UP>＆賦予燒傷(5回合)<OverCharge的話效果UP>","300%/400%/450%/475%/500%","50%/57.5%/65%/72.5%/80%","500/600/700/800/900",""],["701501","自身的攻擊力提升大(1回合)<OverCharge的話效果UP> ＋ 對敵全體的強力攻擊[Lv.] ＋ 自身的HP減少【副作用】","30%/35%/40%/45%/50%","300%/400%/450%/475%/500%","1000",""],["701601","對敵全體的強力攻擊[Lv.] ＋ 對自身賦予每回合ＨＰ回復(3回合)<OverCharge的話效果UP>＆賦予石化(2回合)【副作用】","600%/800%/900%/950%/1000%","2000/3000/4000/5000/6000","",""],["800100","不明","","","",""],["800101","我方全體的防禦力提升(3回合)<OverCharge的話效果UP>＆賦予傷害減免狀態[Lv.](3回合)","30%/35%/40%/45%/50%","100/550/775/888/1000","",""],["800102","我方全體的防禦力提升(3回合)<OverCharge的話效果UP>＆賦予傷害減免狀態[Lv.](3回合)＆弱體耐性提升(3回合)<OverCharge的話效果UP>","30%/35%/40%/45%/50%","100/550/775/888/1000","10%/15%/20%/25%/30%",""],["900101","對我方全體賦予無敵(1回合)＆防禦力提升[Lv.](3回合)＆賦予每回合HP回復<OverCharge的話效果提升> ＋ 對自身賦予石化(2回合)【副作用】","","5%/15%/20%/22.5%/25%","1000/1500/2000/2500/3000",""],["900102","對我方全體賦予無敵(1回合)＆防禦力提升[Lv.](3回合)＆賦予每回合HP回復<OverCharge的話效果提升> ＋ 對自身賦予石化(2回合)【副作用】","","10%/20%/25%/27.5%/30%","1000/1500/2000/2500/3000",""],["900301","對敵全體的強力攻擊[Lv.]＆防禦力下降(3回合)<OverCharge的話效果提升>","300%/400%/450%/475%/500%","20%/25%/30%/35%/40%","",""]];


var skDetail = [["1000","我方全體的防禦力提升[Lv.](3回合)","10%/10.5%/11%/11.5%/12%/12.5%/13%/13.5%/14%/15%","",""],["2000","對我方單體賦予無敵狀態(1回合)＆NP增加[Lv.]","","10%/11%/12%/13%/14%/15%/16%/17%/18%/20%",""],["3450","我方全體的Quick卡性能提升[Lv.](1回合)","18%/19.8%/21.6%/23.4%/25.2%/27%/28.8%/30.6%/32.4%/36%","",""],["3550","我方全體的Quick卡性能提升[Lv.](1回合)","30%/32%/34%/36%/38%/40%/42%/44%/46%/50%","",""],["4550","我方全體的Buster卡性能提升[Lv.](1回合)","20%/22%/24%/26%/28%/30%/32%/34%/36%/40%","",""],["5150","我方全體的攻擊力提升[Lv.](3回合)","6%/6.6%/7.2%/7.8%/8.4%/9.0%/9.6%/10.2%/10.8%/12%","",""],["5350","我方全體的攻擊力提升[Lv.](3回合)","8%/8.8%/9.6%/10.4%/11.2%/12%/12.8%/13.6%/14.4%/16%","",""],["5351","我方全體的攻擊力提升[Lv.](3回合)","8.5%/9.4%/10.2%/11.1%/11.9%/12.8%/13.6%/14.5%/15.3%/17%","",""],["5450","我方全體的攻擊力提升[Lv.](3回合)","9%/9.9%/10.8%/11.7%/12.6%/13.5%/14.4%/15.3%/16.2%/18%","",""],["5551","我方全體的攻擊力提升[Lv.](3回合)","10.5%/11.6%/12.6%/13.7%/14.7%/15.8%/16.8%/17.9%/18.9%/21%","",""],["6650","對自身賦予星星集中狀態大[Lv.](3回合)","300%/330%/360%/390%/420%/450%/480%/510%/540%/600%","",""],["7450","對敵全體〔男性〕以低機率賦予魅惑[Lv.](1回合)＆防禦力下降[Lv.](3回合)","30%/33%/36%/39%/42%/45%/48%/51%/54%/60%","10%/11%/12%/13%/14%/15%/16%/17%/18%/20%",""],["8450","自身的星星發生率提升[Lv.](3回合)","10%/12%/14%/16%/18%/20%/22%/24%/26%/30%","",""],["9450","自身的Critical威力提升[Lv.](3回合)＆弱體耐性提升[Lv.](3回合)","18%/20.7%/23.1%/26.1%/28.8%/31.5%/34.2%/36.9%/39.6%/45%","18%/20.7%/23.1%/26.1%/28.8%/31.5%/34.2%/36.9%/39.6%/45%",""],["9550","自身的Critical威力提升[Lv.](3回合)＆弱體耐性提升[Lv.](3回合)","20%/23%/26%/29%/32%/35%/38%/41%/44%/50%","20%/23%/26%/29%/32%/35%/38%/41%/44%/50%",""],["10450","對自身賦予〔人間〕特攻狀態[Lv.](3回合)","40%/42%/44%/46%/48%/50%/52%/54%/56%/60%","",""],["11550","我方全體的Critical威力提升[Lv.](3回合)","10%/13%/16%/19%/22%/25%/28%/31%/34%/40%","",""],["12350","自身的弱體狀態解除＆HP回復[Lv.]","","500/600/700/800/900/1000/1100/1200/1300/1500",""],["12450","自身的弱體狀態解除＆HP回復[Lv.]","","800/920/1040/1160/1280/1400/1520/1640/1760/2000",""],["12550","自身的弱體狀態解除＆HP回復[Lv.]","","1000/1150/1300/1450/1600/1750/1900/2050/2200/2500",""],["13550","自身的弱體耐性提升[Lv.](3回合)＆HP大回復[Lv.]","50%/55%/60%/65%/70%/75%/80%/85%/90%/100%","1000/1150/1300/1450/1600/1750/1900/2050/2200/2500",""],["14552","對自身賦予〔惡〕特攻狀態[Lv.](3回合)","40%/42%/44%/46%/48%/50%/52%/54%/56%/60%","",""],["15550","自身的攻擊力提升[Lv.](3回合)＆防禦力下降(3回合)【副作用】","10%/12%/14%/16%/18%/20%/22%/24%/26%/30%","10%",""],["16450","自身的攻擊力提升[Lv.](3回合)＆精神異常弱體耐性提升[Lv.](3回合)","9%/10.8%/12.6%/14.4%/16.2%/18%/19.8%/21.6%/23.4%/27%","18%/19.8%/21.6%/23.4%/25.2%/27%/28.8%/30.6%/32.4%/36%",""],["16550","自身的攻擊力提升[Lv.](3回合)＆精神異常弱體耐性提升[Lv.](3回合)","10%/12%/14%/16%/18%/20%/22%/24%/26%/30%","20%/22%/24%/26%/28%/30%/32%/34%/36%/40%",""],["16551","自身的攻擊力提升[Lv.](3回合)＆精神異常弱體耐性提升[Lv.](3回合)","10.5%/12.6%/14.6%/16.7%/18.7%/20.8%/22.8%/24.9%/26.9%/31%","21%/23.1%/25.2%/27.3%/29.4%/31.5%/33.6%/35.7%/37.8%/42%",""],["17350","自身的NP增加[Lv.]","30%/32%/34%/36%/38%/40%/42%/44%/46%/50%","",""],["18550","我方單體的HP大回復[Lv.]","1000/1200/1400/1600/1800/2000/2200/2400/2600/3000","",""],["19350","自身的星星發生提升[Lv.](3回合)","16%/17.6%/19.2%/20.8%/22.4%/24%/25.6%/27.2%/28.8%/32%","",""],["19550","自身的星星發生提升[Lv.](3回合)","20%/22%/24%/26%/28%/30%/32%/34%/36%/40%","",""],["20150","自身的Critical威力稍微提升","2%","",""],["20250","自身的Critical威力稍微提升","4%","",""],["20350","自身的Critical威力稍微提升","6%","",""],["20450","自身的Critical威力提升","8%","",""],["20550","自身的Critical威力提升","10%","",""],["20551","自身的Critical威力提升","11%","",""],["20650","自身的Critical威力提升","12%","",""],["21450","自身的防禦力提升[Lv.](3回合)＆攻擊強化成功率下降(3回合)【副作用】","15%/16%/17%/18%/19%/20%/21%/22%/23%/25%","50%",""],["22350","敵單體的NP以中機率減少20%[Lv.] ＋ 自身的NP增加[Lv.]","60%/62%/64%/66%/68%/70%/72%/74%/76%/80%","18%/18.9%/19.8%/20.7%/21.6%/22.5%/23.4%/24.3%/25.2%/27%",""],["22550","敵單體的NP以高機率減少20%[Lv.] ＋ 自身的NP增加[Lv.]","80%/82%/84%/86%/88%/90%/92%/94%/96%/100%","20%/21%/22%/23%/24%/25%/26%/27%/28%/30%",""],["23150","敵單體的NP以低機率減少20%[Lv.]","40%/42%/44%/46%/48%/50%/52%/54%/56%/60%","",""],["23550","敵單體的NP以中機率減少20%[Lv.]","60%/62%/64%/66%/68%/70%/72%/74%/76%/80%","",""],["23650","敵單體的NP以高機率減少20%[Lv.]","80%/82%/84%/86%/88%/90%/92%/94%/96%/100%","",""],["24550","對自身賦予每回合星星獲得[Lv.](3回合)","3/4/5/5/6/6/7/8/8/9","",""],["25350","自身的防禦力提升[Lv.](3回合)","16%/16.8%/17.6%/18.4%/19.2%/20%/20.8%/21.6%/22.4%/24%","",""],["25450","自身的防禦力提升[Lv.](3回合)","18%/18.9%/19.8%/20.7%/21.6%/22.5%/23.4%/24.3%/25.2%/27%","",""],["25550","自身的防禦力大提升[Lv.](1回合)＆防禦力提升[Lv.](3回合)","30%","10%/12%/14%/16%/18%/20%/22%/24%/26%/30%",""],["26250","自身的攻擊弱體耐性提升[Lv.](3回合)＆HP大回復[Lv.]","40%/44%/48%/52%/26%/60%/64%/68%/72%/80%","1000/1150/1300/1450/1600/1750/1900/2050/2200/2500",""],["26350","自身的攻擊弱體耐性提升[Lv.](3回合)＆HP大回復[Lv.]","50%/55%/60%/65%/70%/75%/80%/85%/90%/100%","1000/1150/1300/1450/1600/1750/1900/2050/2200/2500",""],["26550","自身的攻擊弱體耐性提升[Lv.](3回合)＆HP大回復[Lv.]","60%/66%/72%/78%/84%/90%/96%/102%/108%/120%","1000/1200/1400/1600/1800/2000/2200/2400/2600/3000",""],["27552","自身的攻擊弱體耐性提升[Lv.](3回合)＆防禦力提升[Lv.](3回合)","50%/55%/60%/65%/70%/75%/80%/85%/90%/100%","20%/22%/24%/26%/28%/30%/32%/34%/36%/40%",""],["28550","我方全體的NP獲得量提升[Lv.](3回合)","10%/11%/12%/13%/14%/15%/16%/17%/18%/20%","",""],["29250","我方全體的HP回復[Lv.]＆弱體解除","300/420/540/660/780/900/1020/1140/1260/1500","",""],["30650","對自身賦予傷害加成狀態＆弱體耐性提升","300","30%",""],["31450","對自身賦予〔羅馬〕特攻狀態[Lv.](3回合)","40%/42%/44%/46%/48%/50%/52%/54%/56%/60%","",""],["32551","對自身賦予目標集中狀態[Lv.](3回合)＆防禦力提升[Lv.](3回合)","","20%/22%/24%/26%/28%/30%/32%/34%/36%/40%",""],["33450","對自身賦予必中狀態(3回合)＆星星發生提升[Lv.](3回合)","","10%/12%/14%/16%/18%/20%/22%/24%/26%/30%",""],["34150","自身的弱體耐性稍微提升","10%","",""],["34250","自身的弱體耐性稍微提升","12.5%","",""],["34350","自身的弱體耐性稍微提升","15%","",""],["34351","自身的弱體耐性稍微提升","15.5%","",""],["34450","自身的弱體耐性提升","17.5%","",""],["34550","自身的弱體耐性提升","20%","",""],["34650","自身的弱體耐性提升","25%","",""],["35550","我方全體的寶具威力提升[Lv.](1回合)＆攻擊力提升[Lv.](1回合)","8%/8.8%/9.6%/10.4%/11.2%/12%/12.8%/13.6%/14.4%/16%","8%/8.8%/9.6%/10.4%/11.2%/12%/12.8%/13.6%/14.4%/16%",""],["35551","我方全體的寶具威力提升[Lv.](1回合)＆攻擊力提升[Lv.](1回合)","8.5%/9.4%/10.2%/11.1%/11.9%/12.8%/13.6%/14.5%/15.3%/17%","8.5%/9.4%/10.2%/11.1%/11.9%/12.8%/13.6%/14.5%/15.3%/17%",""],["36449","對自身賦予迴避狀態(1回合)＆Critical威力提升[Lv.](3回合)","","17%/18.7%/20.4%/22.4%/23.8%/25.5%/27.2%/28.9%/30.6%/34%",""],["36450","對自身賦予迴避狀態(1回合)＆Critical威力提升[Lv.](3回合)","","18%/19.8%/21.6%/23.4%/25.2%/27%/28.8%/30.6%/32.4%/36%",""],["36550","對自身賦予迴避狀態(1回合)＆Critical威力提升[Lv.](3回合)","","20%/22%/24%/26%/28%/30%/32%/34%/36%/40%",""],["37350","對自身賦予迴避狀態(1回合)＆防禦力提升[Lv.](3回合)","","8%/8.8%/9.6%/10.4%/11.2%/12%/12.8%/13.6%/14.4%/16%",""],["37450","對自身賦予迴避狀態(1回合)＆防禦力提升[Lv.](3回合)","","9%/9.9%/10.8%/11.7%/12.6%/13.5%/14.4%/15.3%/16.2%/18%",""],["37550","對自身賦予迴避狀態(1回合)＆防禦力提升[Lv.](3回合)","","10%/11%/12%/13%/14%/15%/16%/17%/18%/20%",""],["38550","敵單體以機率賦予技能封印狀態[Lv.](1回合)","50%/55%/60%/65%/70%/75%/80%/85%/90%/100%","",""],["39350","自身的攻擊力提升[Lv.](1回合)","10%/12%/14%/16%/18%/20%/22%/24%/26%/30%","",""],["39450","自身的攻擊力提升[Lv.](2回合)","10%/12%/14%/16%/18%/20%/22%/24%/26%/30%","",""],["39550","自身的攻擊力提升[Lv.](3回合)","10%/12%/14%/16%/18%/20%/22%/24%/26%/30%","",""],["39551","自身的攻擊力大提升[Lv.](1回合)","30%/32%/34%/36%/38%/40%/42%/44%/46%/50%","",""],["41350","對自身賦予根性狀態[Lv.](3回合)","500/600/700/800/900/1000/1100/1200/1300/1500","",""],["41450","對自身賦予根性狀態[Lv.](4回合)","750/875/1000/1125/1250/1375/1500/1625/1750/2000","",""],["41550","對自身賦予根性狀態[Lv.](5回合)","1000/1150/1300/1450/1600/1750/1900/2050/2200/2500","",""],["42650","我方單體的Critical威力提升[Lv.](3回合)＆防禦力下降(3回合)【副作用】","20%/22%/24%/26%/28%/30%/32%/34%/36%/40%","20%",""],["43550","對自身賦予星星集中狀態(3回合)＆星星大量獲得[Lv.]","2","5/6/7/8/9/10/11/12/13/15",""],["44450","星星獲得[Lv.]","3/4/5/6/7/8/9/10/11/12","",""],["45550","敵單體的防禦力下降[Lv.](3回合)","10%/11%/12%/13%/14%/15%/16%/17%/18%/20%","",""],["46350","敵單體的攻擊力下降[Lv.](2回合)＆防禦力下降[Lv.](2回合)","5%/6%/7%/8%/9%/10%/11%/12%/13%/15%","5%/6%/7%/8%/9%/10%/11%/12%/13%/15%",""],["47650","自身的攻擊力提升[Lv.](3回合)　＋　星星獲得[Lv.]","10%/12%/14%/16%/18%/20%/22%/24%/26%/30%","5/6/7/8/9/10/11/12/13/15",""],["48451","自身的精神異常弱體耐性提升大[Lv.](3回合)＆HP回復[Lv.]","50%/55%/60%/65%/70%/75%/80%/85%/90%/100%","750/875/1000/1125/1250/1375/1500/1625/1750/2000",""],["49550","對自身賦予目標集中狀態[Lv.](1回合)＆NP獲得量提升[Lv.](3回合)","","50%/55%/60%/65%/70%/75%/80%/85%/90%/100%",""],["50150","自身的星星發生率稍微提升","2%","",""],["50250","自身的星星發生率稍微提升","4%","",""],["50350","自身的星星發生率稍微提升","6%","",""],["50450","自身的星星發生率提升","8%","",""],["50550","自身的星星發生率提升","10%","",""],["50551","自身的星星發生率提升","10.5%","",""],["50650","自身的星星發生率提升","12%","",""],["51450","自身的攻擊力提升[Lv.](3回合)＆賦予根性狀態＆弱體耐性DOWN(3回合)【副作用】","9%/10.8%/12.6%/14.4%/16.2%/18%/19.8%/21.6%/23.4%/27%","HP 1","50%"],["52551","對自身賦予星星集中狀態[Lv.](3回合)","3000%/3300%/3600%/3900%/4200%/4500%/4800%/5100%/5400%/6000%","",""],["53250","對自身賦予每回合星星獲得狀態[Lv.](3回合)＆防禦力下降【副作用】","3/4/5/5/6/6/7/8/8/9","14%",""],["53450","對自身賦予每回合星星獲得狀態[Lv.](3回合)＆防禦力下降【副作用】","3/4/5/5/6/6/7/8/8/9","18%",""],["53650","對自身賦予每回合星星獲得狀態[Lv.](3回合)＆HP回復[Lv.]","6/7/8/8/9/9/10/11/11/12","1000/1100/1200/1300/1400/1500/1600/1700/1800/2000",""],["54150","自身的Buster卡性能稍微提升","2%","",""],["54250","自身的Buster卡性能稍微提升","4%","",""],["54350","自身的Buster卡性能稍微提升","6%","",""],["54450","自身的Buster卡性能提升","8%","",""],["54550","自身的Buster卡性能提升","10%","",""],["54551","自身的Buster卡性能提升","11%","",""],["54650","自身的Buster卡性能提升","12%","",""],["55451","對自身賦予〔猛獸〕特攻狀態[Lv.](3回合)","40%/42%/44%/46%/48%/50%/52%/54%/56%/60%","",""],["56550","60%機率自身攻擊力提升[Lv.](3回合)＆60%機率防禦力提升[Lv.](3回合)＆HP回復[Lv.]","20%/22%/24%/26%/28%/30%/32%/34%/36%/40%","20%/22%/24%/26%/28%/30%/32%/34%/36%/40%","1000/1200/1400/1600/1800/2000/2200/2400/2600/3000"],["56650","60%機率自身攻擊力提升[Lv.](3回合)＆60%機率防禦力提升[Lv.](3回合)＆HP回復[Lv.]","22%/24.2%/26.4%/28.6%/30.8%/33%/35.2%/37.4%/39.6%/44%","22%/24.2%/26.4%/28.6%/30.8%/33%/35.2%/37.4%/39.6%/44%","1200/1420/1640/1860/2080/2300/2520/2740/2960/3400"],["57450","星星大量獲得[Lv.]","4/5/6/7/8/9/10/11/12/14","",""],["57550","星星大量獲得[Lv.]","5/6/7/8/9/10/11/12/13/15","",""],["58450","敵單體〔Servant〕的寶具威力下降大[Lv.](1回合)","15%/16.5%/18%/19.5%/21%/22.5%/24%/25.5%/27%/30%","",""],["59450","對自身賦予迴避狀態(3次)＆防禦力提升[Lv.](3回合)","","8%/8.8%/9.6%/10.4%/11.2%/12%/12.8%/13.6%/14.4%/16%",""],["59550","對自身賦予迴避狀態(3次)＆防禦力提升[Lv.](3回合)","","9%/9.9%/10.8%/11.7%/12.6%/13.5%/14.4%/15.3%/16.2%/18%",""],["60550","敵全體的攻擊力下降[Lv.](3回合)","5%/6%/7%/8%/9%/10%/11%/12%/13%/15%","",""],["61450","自身的精神弱體成功率提升[Lv.](3回合)＆HP大回復[Lv.]","10%/12%/14%/16%/18%/20%/22%/24%/26%/30%","1000/1150/1300/1450/1600/1750/1900/2050/2200/2500",""],["62149","對自身賦予傷害加成狀態","95","",""],["62150","對自身賦予傷害加成狀態","100","",""],["62250","對自身賦予傷害加成狀態","125","",""],["62350","對自身賦予傷害加成狀態","150","",""],["62450","對自身賦予傷害加成狀態","175","",""],["62550","對自身賦予傷害加成狀態","200","",""],["62650","對自身賦予傷害加成狀態","250","",""],["63550","對敵單體賦予〔Servant〕無法行動狀態[Lv.](1回合)","70%/75%/80%/85%/90%/95%/100%/100%/110%/120%","",""],["64150","敵全體的防禦力下降[Lv.](3回合)＆賦予燒傷(3回合)","5%/6%/7%/8%/9%/10%/11%/12%/13%/15%","HP -300",""],["65650","持有〔龍〕特性我方全體的攻擊力提升[Lv.](3回合)","20%/22%/24%/26%/28%/30%/32%/34%/36%/40%","",""],["66550","自身的精神弱體賦予成功率提升[Lv.](3回合)＆精神弱體耐性提升[Lv.](3回合)","5%/7%/9%/11%/13%/15%/17%/19%/21%/25%","50%/55%/60%/65%/70%/75%/80%/85%/90%/100%",""],["67550","自身的星星發生率提升[Lv.](3回合)","10%/12%/14%/16%/18%/20%/22%/24%/26%/30%","",""],["68450","對敵單體賦予〔人型〕魅惑[Lv.](1回合)","50%/53%/56%/59%/62%/65%/68%/71%/74%/80%","",""],["69450","60%機率自身攻擊力提升[Lv.](3回合)＆60%機率防禦力提升[Lv.](3回合)＆HP回復[Lv.]","50%/55%/60%/65%/70%/75%/80%/85%/90%/100%","50%/55%/60%/65%/70%/75%/80%/85%/90%/100%","500/650/800/950/1100/1250/1400/1550/1700/2000"],["70450","對自身賦予無敵狀態(1回合)＆HP回復[Lv.]","","500/600/700/800/900/1000/1100/1200/1300/1500",""],["71350","自身的Critical威力提升[Lv.](3回合)","20%/23%/26%/29%/32%/35%/38%/41%/44%/50%","",""],["72550","自身的弱體狀態解除＆弱體耐性大提升[Lv.](3回合)","","50%/55%/60%/65%/70%/75%/80%/85%/90%/100%",""],["73650","我方全體的NP獲得量提升[Lv.](3回合)","10%/11%/12%/13%/14%/15%/16%/17%/18%/20%","",""],["74149","敵單體〔Servant〕的寶具威力下降[Lv.](1回合)","5.5%/6.1%/6.6%/7.2%/7.7%/8.3%/8.8%/9.4%/9.9%/11%","",""],["74450","敵單體〔Servant〕的寶具威力下降[Lv.](1回合)","9%/9.9%/10.8%/11.7%/12.6%/13.5%/14.4%/15.3%/16.2%/18%","",""],["75450","對自身賦予每回合HP回復狀態[Lv.](5回合)","100/120/140/160/180/200/220/240/260/300","",""],["76552","自身的星星發生率提升[Lv.](3回合)","10%/12%/14%/16%/18%/20%/22%/24%/26%/30%","",""],["77350","我方全體的寶具威力提升[Lv.](1回合)","8%/8.8%/9.6%/10.4%/11.2%/12%/12.8%/13.6%/14.4%/16%","",""],["77351","我方全體的寶具威力提升[Lv.](1回合)","8.5%/9.4%/10.2%/11.1%/11.9%/12.8%/13.6%/14.5%/15.3%/17%","",""],["77450","我方全體的寶具威力提升[Lv.](1回合)","9%/9.9%/10.8%/11.7%/12.6%/13.5%/14.4%/15.3%/16.2%/18%","",""],["78350","對自身賦予星星集中狀態大[Lv.](1回合)","500%/550%/600%/650%/700%/750%/800%/850%/900%/1000%","",""],["79451","自身的精神異常狀態解除 ＋ 星星大量獲得[Lv.]","","5/6/7/8/9/10/11/12/13/15",""],["80150","自身的弱體成功率稍微提升","2%","",""],["80250","自身的弱體成功率稍微提升","4%","",""],["80350","自身的弱體成功率稍微提升","6%","",""],["80450","自身的弱體成功率提升","8%","",""],["80550","自身的弱體成功率提升","10%","",""],["80650","自身的弱體成功率提升","12%","",""],["81000","愛惜皮毛讓自身的HP回復[Lv.]","500/700/900/1100/1300/1500/1700/1900/2100/2500","",""],["82550","我方單體的Critical威力提升[Lv.](3回合)＆NP增加","20%/23%/26%/29%/32%/35%/38%/41%/44%/50%","30%",""],["83150","自身的Arts卡性能稍微提升","2%","",""],["83250","自身的Arts卡性能稍微提升","4%","",""],["83350","自身的Arts卡性能稍微提升","6%","",""],["83351","自身的Arts卡性能稍微提升","7%","",""],["83450","自身的Arts卡性能提升","8%","",""],["83550","自身的Arts卡性能提升","10%","",""],["83650","自身的Arts卡性能提升","12%","",""],["84650","我方全體的Arts卡性能提升[Lv.](1回合)","22%/24.2%/26.4%/28.6%/30.8%/33%/35.2%/37.4%/39.6%/44%","",""],["85650","自身的防禦力提升[Lv.](3回合)＆毒耐性提升[Lv.](3回合)","10%/11%/12%/13%/14%/15%/16%/17%/18%/20%","80%/88%/96%/104%/112%/120%/128%/136%/144%/160%",""],["86450","自身的精神弱體耐性提升[Lv.](3回合)＆HP回復[Lv.]","50%/55%/60%/65%/70%/75%/80%/85%/90%/100%","500/650/800/950/1100/1250/1400/1550/1700/2000",""],["87550","對自身賦予迴避狀態(3次)＆星星發生提升[Lv.](3回合)","","10%/12%/14%/16%/18%/20%/22%/24%/26%/30%",""],["88150","自身的Quick卡性能稍微提升","2%","",""],["88250","自身的Quick卡性能稍微提升","4%","",""],["88350","自身的Quick卡性能稍微提升","6%","",""],["88450","自身的Quick卡性能提升","8%","",""],["88550","自身的Quick卡性能提升","10%","",""],["88551","自身的Quick卡性能提升","11%","",""],["88552","自身的Quick卡性能提升","11.5%","",""],["88650","自身的Quick卡性能提升","12%","",""],["89550","自身的NP驚人地增加[Lv.]","80%/87%/94%/101%/108%/115%/122%/129%/136%/150%","",""],["90150","自身的NP大幅增加[Lv.]","50%/52.5%/55%/57.5%/60%/62.5%/65%/67.5%/70%/75%","",""],["91350","對敵單體賦予〔異性〕魅惑[Lv.](1回合)","50%/53%/56%/59%/62%/65%/68%/71%/74%/80%","",""],["91450","對敵單體賦予〔異性〕魅惑[Lv.](1回合)","60%/63%/66%/69%/72%/75%/78%/81%/84%/90%","",""],["91550","對敵單體賦予〔異性〕魅惑[Lv.](1回合)","70%/73%/76%/79%/82%/85%/88%/91%/94%/100%","",""],["92550","自身的Buster卡性能提升[Lv.](1回合)","30%/32%/34%/36%/38%/40%/42%/44%/46%/50%","",""],["93551","以機率讓敵單體變成無法行動狀態[Lv.](1回合)","50%/55%/60%/65%/70%/75%/80%/85%/90%/100%","",""],["94349","自身的Arts卡性能提升[Lv.](1回合)","21%/22.4%/23.8%/25.2%/26.6%/28%/29.4%/30.8%/32.2%/35%","",""],["95550","對自身賦予無敵狀態(3次)＆每回合HP回復狀態[Lv.](5回合)","","200/240/280/320/360/400/440/480/520/600",""],["96350","對自身賦予目標集中狀態[Lv.](3回合)＆HP大回復[Lv.]","","1000/1150/1300/1450/1600/1750/1900/2050/2200/2500",""],["97150","自身的NP獲得量提升[Lv.](3回合)","12%/13.8%/15.6%/17.4%/19.2%/21%/22.8%/24.6%/26.4%/30%","",""],["97349","自身的NP獲得量提升[Lv.](3回合)","15%/17.3%/19.5%/21.8%/24%/26.3%/28.5%/30.8%/33%/37.5%","",""],["97450","自身的NP獲得量提升[Lv.](3回合)","18%/20.7%/23.1%/26.1%/28.8%/31.5%/34.2%/36.9%/39.6%/45%","",""],["97550","自身的NP獲得量提升[Lv.](3回合)","20%/23%/26%/29%/32%/35%/38%/41%/44%/50%","",""],["98550","對自身賦予根性狀態(5回合)＆NP增加[Lv.]","HP 1","10%/12%/14%/16%/18%/20%/22%/24%/26%/30%",""],["99450","對自身賦予目標集中狀態[Lv.](1回合)＆防禦力提升大[Lv.](1回合)","","30%/33%/36%/39%/42%/45%/48%/51%/54%/60%",""],["100551","我方全體的防禦力提升[Lv.](3回合)＆賦予傷害減免狀態[Lv.](3回合)＆NP稍微增加","20%/21%/22%/23%/24%/25%/26%/27%/28%/30%","200/230/260/290/320/350/380/410/440/500","10%"],["101551","我方全體的攻擊力提升[Lv.](3回合)＆賦予傷害加成狀態[Lv.](3回合)＆NP稍微增加","20%/21%/22%/23%/24%/25%/26%/27%/28%/30%","200/230/260/290/320/350/380/410/440/500","10%"],["102450","敵單體的防禦力下降[Lv.](3回合)＆攻擊力提升(3回合)【副作用】","12%/13.2%/14.4%/15.6%/16.8%/18%/19.2%/20.4%/21.6%/24%","20%",""],["103550","對自身賦予〔龍〕特攻狀態[Lv.](3回合)＆〔龍〕特防狀態(3回合)","50%/53%/56%/59%/62%/65%/68%/71%/74%/80%","30%",""],["104650","自身的防禦力大提升[Lv.](1回合)＆攻擊力提升(3回合)＆弱體耐性提升(3回合)","30%/32%/34%/36%/38%/40%/42%/44%/46%/50%","20%","50%"],["105551","對自身賦予〔男性〕特攻狀態[Lv.](1回合)","50%/55%/60%/65%/70%/75%/80%/85%/90%/100%","",""],["106550","自身的Buster卡性能提升[Lv.](1回合) ＋ 對敵全體賦予燒傷(10回合)","25%/27%/29%/31%/33%/35%/37%/39%/41%/45%","HP -300",""],["107550","對自身賦予根性狀態[Lv.](5回合)＆星星獲得","1000/1150/1300/1450/1600/1750/1900/2050/2200/2500","8",""],["108650","我方單體的Arts卡性能提升[Lv.](3回合)","30%/32%/34%/36%/38%/40%/42%/44%/46%/50%","",""],["109550","自身的防禦力大提升(1回合)＆HP回復[Lv.]","50%","1000/1100/1200/1300/1400/1500/1600/1700/1800/2000",""],["110450","我方全體的精神異常狀態解除＆賦予迴避(1次)＆HP回復[Lv.]","30%/35%/40%/45%/50%/55%/60%/65%/70%/80%","300/350/400/450/500/550/600/650/700/800",""],["111350","對敵單體以中機率賦予石化[Lv.]＆NP以中機率減少20%[Lv.]","60%/62%/64%/66%/68%/70%/72%/74%/76%/80%","60%/62%/64%/66%/68%/70%/72%/74%/76%/80%",""],["112650","自身的NP增加[Lv.]＆無敵貫通狀態(3回合) ＋ 星星獲得","30%/32%/34%/36%/38%/40%/42%/44%/46%/50%","無視迴避和無敵給予傷害","10"],["113550","自身的星星發生率大提升[Lv.](3回合)","30%/32%/34%/36%/38%/40%/42%/44%/46%/50%","",""],["114450","自身的Critical威力提升[Lv.](1回合)","50%/55%/60%/65%/70%/75%/80%/85%/90%/100%","",""],["115350","自身的攻擊力提升[Lv.](1回合)＆星星集中[Lv.](1回合)","20%/21%/22%/23%/24%/25%/26%/27%/28%/30%","300%/330%/360%/390%/420%/450%/480%/510%/540%/600%",""],["116550","我方全體的毒狀態解除＆HP回復[Lv.]","","1000/1100/1200/1300/1400/1500/1600/1700/1800/2000",""],["117450","我方單體的HP回復量提升[Lv.](1回合)","50%/55%/60%/65%/70%/75%/80%/85%/90%/100%","",""],["118550","對自身賦予星星集中狀態大[Lv.](1回合)","500%/550%/600%/650%/700%/750%/800%/850%/900%/1000%","",""],["119450","自身的Quick卡性能提升[Lv.](1回合)","30%/32%/34%/36%/38%/40%/42%/44%/46%/50%","",""],["120450","我方全體的NP獲得量提升[Lv.](3回合)","20%/21%/22%/23%/24%/25%/26%/27%/28%/30%","",""],["121550","對自身賦予〔神性〕特攻狀態[Lv.](1回合)","50%/55%/60%/65%/70%/75%/80%/85%/90%/100%","",""],["122550","對自身賦予星星集中狀態[Lv.](3回合)＆Critical威力提升[Lv.](3回合)","300%/330%/360%/390%/420%/450%/480%/510%/540%/600%","20%/23%/26%/29%/32%/35%/38%/41%/44%/50%",""],["123551","80%機率對自身賦予Critical威力提升(3回合)[Lv.]＆80%機率賦予星星集中狀態(3回合)[Lv.]＆賦予迴避狀態(1回合)","30%/32%/34%/36%/38%/40%/42%/44%/46%/50%","300%/320%/340%/360%/380%/400%/420%/440%/460%/500%",""],["124450","對自身賦予〔神性〕特攻狀態[Lv.](1回合)＆賦予〔死靈〕特攻狀態[Lv.](1回合)","50%/55%/60%/65%/70%/75%/80%/85%/90%/100%","50%/55%/60%/65%/70%/75%/80%/85%/90%/100%",""],["125350","敵全體〔女性〕的攻擊力大下降[Lv.](1回合)","30%/32%/34%/36%/38%/40%/42%/44%/46%/50%","",""],["126450","自身的星星發生率大提升[Lv.](3回合)","30%/32%/34%/36%/38%/40%/42%/44%/46%/50%","",""],["127000","我方單體的Quick卡性能提升[Lv.](1回合)","30%/32%/34%/36%/38%/40%/42%/44%/46%/50%","",""],["940001","本能寺點數的獲得量增加20%【『ぐだぐだ本能寺』活動期間限定】","","",""],["940002","本能寺點數的獲得量增加40%【『ぐだぐだ本能寺』活動期間限定】","","",""],["940003","本能寺點數的獲得量增加60%【『ぐだぐだ本能寺』活動期間限定】","","",""],["940004","本能寺點數的獲得量增加100%【『ぐだぐだ本能寺』活動期間限定】","","",""],["980001","我方單體的HP大回復[Lv.]","1000/1200/1400/1600/1800/2000/2200/2400/2600/3000","",""],["980002","我方單體的攻擊力超提升[Lv.](1回合)","30%/32%/34%/36%/38%/40%/42%/44%/46%/50%","",""],["980003","對我方單體賦予迴避狀態(1回合)","","",""]];