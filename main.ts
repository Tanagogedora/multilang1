namespace maltilang
{
    // ブロック内選択リスト
    export enum SelcNo1
    {
        //% blockId="itemlight"
        //% block="@Localization(local.ja-JP) 光"
        //% block="@Localization(local.ja-JP) Light"
            Light,
        //% blockId="itemstar"   
        //% block="@Localozation(local.ja-JP) 星"
        //% block="@Localization(local.en) Star"
            Star,
        //% blockId="itemmoon"
        //% block="@Localization(local.ja-JP) 月"
        //% block="@Localization(local.en) Moon"
            Moon
    }

    // 拡張ブロック
    //% blockId="SelectItems"
    //% block="@Localization(local.ja-JP) アイテム %item"
    //% block="@Localization(local.en) Item %item"
    // weight=80, blockGap=8
    export function Select_Items(item:SelcNo1):string
    {
        return item.toString();
        
    }       
}