namespace SpriteKind {
    export const ataque = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.ataque, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -0.1
    FREZZER.startEffect(effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar2.value += -0.1
    GOKU.startEffect(effects.fire, 500)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    ataque5 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 9 9 9 9 9 9 8 . . . . 
        . . 8 9 8 9 9 9 1 9 9 9 8 . . . 
        . 8 9 9 8 9 9 9 9 1 9 9 9 8 . . 
        . 8 9 9 9 8 9 9 9 9 9 9 9 8 . . 
        . 8 9 9 8 9 9 9 9 9 9 9 9 8 . . 
        . 8 9 8 9 9 9 9 9 9 9 9 9 8 . . 
        . 8 9 9 9 9 9 9 9 9 9 9 9 8 . . 
        . 8 9 9 9 9 9 8 9 9 9 9 9 8 . . 
        . 8 9 9 8 9 9 8 9 9 9 9 9 8 . . 
        . . 8 9 9 8 9 8 9 9 9 9 8 . . . 
        . . . 8 9 8 9 8 9 9 9 8 . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, GOKU, 92, 0)
    ataque5.setKind(SpriteKind.ataque)
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.LT, statusbars.ComparisonType.Percentage, 25, function (status) {
    animation.runImageAnimation(
    FREZZER,
    assets.animation`myAnim1`,
    200,
    false
    )
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    sprites.destroy(GOKU)
    game.gameOver(false)
    game.gameOver(false)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    GOKU,
    assets.animation`myAnim0`,
    500,
    false
    )
})
let ataque_freezer: Sprite = null
let ataque5: Sprite = null
let statusbar2: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let FREZZER: Sprite = null
let GOKU: Sprite = null
tiles.setCurrentTilemap(tilemap`nivel6`)
GOKU = sprites.create(assets.image`myImage0`, SpriteKind.Player)
controller.moveSprite(GOKU, 100, 100)
FREZZER = sprites.create(img`
    ..............................
    ..............................
    ..............ffffff..........
    .............f1aaaaaf.........
    ............f111aaafff........
    ...........faaaaaaaff1f.......
    ...........faaaaffff11f.......
    ...........ffffff111e1f.......
    ...........feeeee1e1e1f.......
    ...........f21e211e1eeef......
    ...........f1aaafee111ef......
    .........ffffaffae1fffff......
    ........f1111faaafff......ff..
    .......ff1a1e1ffffffffff..ff..
    ......f11a11e111ff1111a1f.fff.
    .....f111111111eeeee111afff1f.
    ....f11111ff11eaaaa11ef111fef.
    ...fa1111f.feeeaaaaeeeff11aef.
    ...faa11f..f1111aa1111f.faaef.
    ....faaf...f1e1eee111f...aa1f.
    .....ff....f11111ee11f...ff1ff
    ...........f111ee1111ff..f11ff
    ............feeefeeef1ffff1ef.
    ............feeefeeeff111ee1f.
    ............f11ef11effffee1ff.
    ............fc11f11cff..ffff..
    .........ffffc11f11cfffff.....
    ........faaaaaaafaaaaaaaff....
    ........ffffffffffffffff......
    .......................1......
    `, SpriteKind.Enemy)
GOKU.setPosition(26, 83)
FREZZER.setPosition(121, 85)
statusbar = statusbars.create(80, 5, StatusBarKind.Health)
statusbar.setPosition(117, 9)
statusbar.value = 100
statusbar2 = statusbars.create(65, 5, StatusBarKind.Health)
statusbar2.max = 80
statusbar2.setPosition(39, 9)
game.onUpdateInterval(750, function () {
    FREZZER.setPosition(randint(0, 150), randint(0, 150))
})
forever(function () {
	
})
game.onUpdateInterval(200, function () {
    ataque_freezer = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . c c c c c c c . . . . . 
        . . . c a a a a a a a c . . . . 
        . . c a a c a a a 1 a a c . . . 
        . c a a c c a a a a 1 a a c . . 
        . c a a a c c a a a a a a c . . 
        . c a a c a a a a a a a a c . . 
        . c a a c a a a a a a a c c . . 
        . c a a a a a a a a a c c c . . 
        . c a a a a a a a a c c a c . . 
        . c a a a a a c a a a a a c . . 
        . . c a a a c c c a a a c . . . 
        . . . c a a a a a a a c . . . . 
        . . . . c c c c c c c . . . . . 
        . . . . . . . . . . . . . . . . 
        `, FREZZER, -92, 0)
    ataque_freezer.setKind(SpriteKind.Projectile)
})
