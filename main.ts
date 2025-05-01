namespace maltilang {
    // ブロック内選択リスト
    export enum SelcNo1 {
        //% block="@localization(locale.ja-JP) 光"
        //% block="@localization(locale.en) Light"
        Light,

        //% block="@localization(locale.ja-JP) 星"
        //% block="@localization(locale.en) Star"
        Star,

        //% block="@localization(locale.ja-JP) 月"
        //% block="@localization(locale.en) Moon"
        Moon
    }

    // ブロック本体
    //% blockId="SelectItems"
    //% block="@localization(locale.ja-JP) アイテム %item"
    //% block="@localization(locale.en) Item %item"
    //% weight=80 blockGap=8
    export function Select_Items(item: SelcNo1): string {
        return item.toString();
    }
}
