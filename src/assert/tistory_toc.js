var TOC = (function ($) {
    function create() {
        generateToc(collect());
    }

    /**
     * h1 ~ h4 태그의 dom 엘리먼트 수집
     * 각 태그별 id 등록
     * 
     * 태그와 네이밍 반환
     */
    function collect() {
        var articles = [];

        // toc 클래스를 갖는 엘리먼트 획득
        var tocs = $('.toc');
        
        // toc 수만큼 게시물이 존재하므로 각 게시물에 해당되는 h1 ~ h3 수집
        for (var i=0; i<tocs.length; i++) {
            var contexts = $(tocs[i]).parent().find('h1, h2, h3');

            // h1 ~ h4가 없는경우 처리하지 않음.
            if (contexts.length === 0) {
                continue;
            }

            articles.push({
                article: $(tocs[i]).parent(),
                contexts: contexts
            });
        }

        return articles;
    }

    /**
     * toc 구성
     * @param articles
     */
    function generateToc(articles) {
        if (articles.length === 0) {
            return;
        }

        for (var i=0; i<articles.length; i++) {
            var toc = $(articles[i].article).find('.toc');
            var hCount = {
                h1: 0,
                h2: 0,
                h3: 0
            };

            for (var j=0; j<articles[i].contexts.length; j++) {
                var context = $(articles[i].contexts[j]);

                var tagName = context.prop('tagName').toLowerCase();

                // 다음 데이터를 위한 값 초기화
                switch(tagName) {
                    case 'h1':
                        hCount.h2 = 0;
                        hCount.h3 = 0;
                        hCount.h4 = 0;
                        break;
                    case 'h2':
                        hCount.h3 = 0;
                        hCount.h4 = 0;
                        break;
                }

                hCount[tagName]++;

                var title = context.text();
                var id = i + "_" + encodeURIComponent(title);

                var order = generateOrder(tagName, hCount.h1, hCount.h2, hCount.h3, hCount.h4);
                var level = "level_" + tagName;

                context.attr('id', id);
                var a = $('<a>').attr('href', '#' + id).text(order + " " + title);
                var row = $('<div>').attr("class", level).append(a);
                toc.append(row);
            }
        }
    }

    function generateOrder(tagName, h1Count, h2Count, h3Count) {
        var order = '';

        switch(tagName.toLowerCase()) {
            case 'h1':
                order = h1Count;
                break;

            case 'h2':
                order = h1Count + "." + h2Count;
                break;

            case 'h3':
                order = h1Count + "." + h2Count + "." + h3Count;
                break;
        }

        return order + "";
    }

    return {
        create: create
    };
})(jQuery);

