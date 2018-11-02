module Main exposing (main)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , update = update
        , subscriptions = subscriptions
        , view = view
        }



-- INIT


init : ( Model, Cmd Msg )
init =
    ( { message = "" }, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none



-- MODEL


type alias Model =
    { message : String }



-- UPDATE


type Msg
    = SayHello String
    | Shutup
    | SayBye


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        SayHello greeted ->
            ( { model | message = "hello" ++ greeted }, Cmd.none )

        Shutup ->
            ( { model | message = "" }, Cmd.none )

        SayBye ->
            ( { model | message = "bye" }, Cmd.none )



-- VIEW


view : Model -> Html Msg
view model =
    div []
        [ button [ onClick (SayHello "world tree") ] [ text "hello" ]
        , button [ onClick Shutup ] [ text "shutup" ]
        , button [ onClick SayBye ] [ text "bye" ]
        , span [ class "blue" ] [ text model.message ]
        ]
