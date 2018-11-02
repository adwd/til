module Main exposing (main)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)


main : Program Never Model Msg
main =
    Html.beginnerProgram
        { model = { message = "" }
        , update = update
        , view = view
        }



-- MODEL


type alias Model =
    { message : String }



-- UPDATE


type Msg
    = SayHello String
    | Shutup
    | SayBye


update : Msg -> Model -> Model
update msg model =
    case msg of
        SayHello greeted ->
            { model | message = "hello" ++ greeted }

        Shutup ->
            { model | message = "" }

        SayBye ->
            { model | message = "bye" }



-- VIEW


view : Model -> Html Msg
view model =
    div []
        [ button [ onClick (SayHello "world tree") ] [ text "hello" ]
        , button [ onClick Shutup ] [ text "shutup" ]
        , button [ onClick SayBye ] [ text "bye" ]
        , span [ class "blue" ] [ text model.message ]
        ]
