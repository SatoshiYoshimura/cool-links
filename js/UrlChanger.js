//名前空間
coolLinks = {};
coolLinks.UrlChanger = null;

// クラスの定義
(function () {
  var urlChangerConstracter = null;
  // コンストラクタ
  function UrlChanger() {
    var self = this;
    // プロパティ（メンバ変数）
    this._$materialButtonList = null || $('.js-button');
    this._$urlButton = null || $('.js-url-button');
    this._$urlInput = null || $('.js-url-input');
    this._$firstMaterialButton = null || $('.js-button').first();

    //リスナー
    this._$urlButton.bind("touchend",function(){
      self.setFirstButton();
      self.setUrl();
    });

  }

  // 名前空間用のオブジェクトに代入
  coolLinks.UrlChanger = UrlChanger;

  // メソッド
  UrlChanger.prototype.setFirstButton = function () {
    //描画後に変わるのでDOM再取得
    this._$materialButtonList = $('.js-button');
    //マテリアルボタンリストの一番上を取得
    this._$firstMaterialButton = this._$materialButtonList.first();
  }
  UrlChanger.prototype.setUrl = function () {
    var text = this._$urlInput.val();
    this._$firstMaterialButton.find('.js-link').attr("href",text);
  }

})(); // 即実行
