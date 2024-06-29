// Injection 
if (window.location.hostname.includes("tanktrouble.com")) {
    function injectJSCode(code) {
        const scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'text/javascript');
        scriptElement.textContent = code;
        document.documentElement.appendChild(scriptElement);
    }

    function injectJSLink(src) {
        const scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'text/javascript');
        scriptElement.setAttribute('src', src);
        document.documentElement.appendChild(scriptElement);
    }

    // Function to dynamically add custom CSS
    const addCustomStyle = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

// Get the hostname of the current website and add Classic UI to it
    const site = window.location.hostname;
    if (site.includes("tanktrouble.com")) {
       addCustomStyle(`
@font-face {
    font-family: 'ClassicTankTrouble';
    src:  url('ttcv2/fonts/Classic_TankTrouble_font.ttf') format('truetype');
}

#game {
    position: relative;
    left: -10px;
    top: 0px;
}
    .premium #header {
        background-image: url(../assets/images/header/background.png);
        background-size: 120px 120px;
}
    .snippet {
        background: #fff;
        border: #000 2px solid;
        border-radius: 5px;
        box-shadow: none;
    }
    .snippet .header {
        background: #ccc;
        color: #fff;
        border-radius: 3px;
        border: #bababa 2px solid;
        margin-bottom: 5px;
        text-shadow: -1px -1px 0 #000,  
                      1px -1px 0 #000,
                     -1px  1px 0 #000,
                      1px  1px 0 #000;
    }
    #scrapyardSnippet {
        width: 133px;
        padding: 3px;
    }
    #scrapyardSnippet .header {
    background: none;
    border: none;
    }
    .shopItem svg text {
       text-shadow: none;
       stroke: none;
    }
.shopItem {
    background: #555;
    border-radius: 3px;
    border: #666 3px solid;
    box-shadow: #000 0 3px 5px 0;
    border-radius: 7px;
}
div#shopItem-120 {
    background: #ebc934;
    border: 3px #d3a310 solid;
}
div#shopItem-122 {
    background: #1ab14d;
    border: 3px #2a873b solid;
}
    .shopItem.info button.info {
    width: 34px;
    float: right;
    right: 10px;
    color: white;
    background: #0097fb;
    }
    #teaser-25 .mode {
        color: white;
    }
    .forum .bubble {
        background-color: #f2f2f2;
        border: #333 2px solid;
        border-radius: 2px;
        box-shadow: 0 3px 4px 0 rgba(0,0,0, .5)
    }
    .body {
        font-size: 14px;
    }
    .forum .tank {
        font-family: 'TankTrouble';
        font-size: 14px;
    }
    .forum .tank div {
    width: 150px;
    height: 20px;
    left: -5px;
    top: -19px;
    position: relative;
   }
   .box .content {
    background: #d5d5d5;
    border-radius: 5px;
    border: #999 3px solid;
    padding: 5px;
    width: 250px;
}
.box .spaced {
    padding: 5px;
    left: 0px;
    border: none;
    background: none;
    box-shadow: none;
}
    #overlay {
    color: #fff;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    background-color: rgb(255 255 255);
}
   #overlay .newGame .premium::before {
    content: "";
    width: 160px;
    height: 180px;
    position: absolute;
    top: -115px;
    left: 50%;
    transform: translateX(-50%);
    background-image: url(https://cdn.tanktrouble.com/RELEASE-2023-09-06-01/assets/images/tankInfo/accountActive@2x.png);
    background-size: 160px 180px;
}
    #overlay .messages .message {
        background: #1ad72a;
        color: #fff;
        border-radius: 2px;
        text-shadow: none;
    }
    #overlay .messages .message.important {
        background: #e01f1f;
        color: #fff;
        border-radius: 2px;
        text-shadow: none;
     }
     #overlay .admin .attention {
        text-shadow: none;
     }
#overlay .messages textarea {
    box-sizing: border-box;
    width: 490px;
}
    .box .tab.right {
        background: #999;
    }
    .box .tab.left {
        background: #999;
    }
   #tankinfo .username {
    position: relative;
    z-index: 1;
    height: 28px;
    background: #979797;
    border: 3px #0000002e solid;
    border-radius: 4px;
}
   #tankinfo .icon {
    position: absolute;
    width: 320px;
    height: 192px;
    left: calc(50% + 5px);
    top: -162px;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
}
     .achievement.unlockedAndSeen {
        background: linear-gradient(to bottom, #ccc, #666);
        box-shadow: #000 0px 3px 3px 0px;
        text-shadow: none;
        color: #000;
    }
    .achievement {
        background: #666;
        text-shadow: none;
        color: #fff;
    }
    .achievement .progress {
        background: linear-gradient(to bottom, #e5c766, #a68826);
    }
    .note {
        color: #000;
    }
    #overlay input[type="checkbox"]+label::before {
    content: '';
    background: red;
    border: 2px solid #bf0000;
    transition: background .3s;
    border-radius: 5px;
    font-size: 35px;
    line-height: 24px;
    text-align: center;
    vertical-align: middle;
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 5px;
}
#overlay input[type="checkbox"]:checked+label::before {
    border-color: #00df4e !important;
    background: limegreen;
}
#content {
    max-width: 1884px !important;
    width: calc(100%) !important;
}
.horizontalAdSlot,
.verticalAdSlot,
#leftBanner,
#rightBanner,
#topBanner {
    display: none !important;
}
#chat {
    -webkit-filter: none;
    filter: none;
    -webkit-transform: translateZ(0);
    position: fixed;
    z-index: 10;
    width: 1px;
    height: 1px;
}
#chat .body {
    width: 242px;
    height: 140px;
    margin-left: 20px;
    margin-top: 0px !important;
    cursor: default;
    background: #00000014;
    padding: 2px 2px 2px 5px;
}
#chat .content {
    font-family: 'ClassicTankTrouble';
    font-size: 10pt;
    width: 0;
    pointer-events: none;
    transition: width .3s .2s;
    background: none;
}
#chat form {
    border-radius: 3px;
    background-color: #dfdfdf;
    pointer-events: auto;
    animation-name: chatsend;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-direction: normal;
    animation-iteration-count: infinite;
    padding: 2px 2px 2px 2px;
    margin-left: 20px;
    left: 0px;
    border: none;
    width: 245px;
    box-shadow: none;
}
#chat:not(.open) form {
	display: none;
    background: none;
}
#chat.opening .content, #chat.open .content {
    width: 269px;
    transition: width .250s;
}
#chat.opening textarea, #chat.open textarea {
    width: 235px;
    opacity: 1;
    cursor: inherit;
}
#chat textarea {
    font-weight: bold;
    position: relative;
    left: 5px;
    width: 0;
    min-height: 16px !important;
    opacity: 0;
    margin: 0;
    padding: 1px 2px;
    border: none !important;
    outline: none !important;
    overflow-y: hidden;
    resize: none;
    background: none;
    cursor: default;
}
       `);
	    
//Classic Mouse script
    Tank.method('_computeRotationSpeed', function() {
        this.rotationSpeed = 0;
        var speedModifier = this.roundModel.getModifier(this.playerId, Constants.MODIFIER_TYPES.SPEED);
        var classicMouseEnabled = Inputs.isClassicMouseEnabled(this.playerId);
        if (this.left) {
            this.rotationSpeed += -Constants.TANK.ROTATION_SPEED * (classicMouseEnabled ? Inputs.turnMultiplier : speedModifier);
        }
        if (this.right) {
            this.rotationSpeed += Constants.TANK.ROTATION_SPEED * (classicMouseEnabled ? Inputs.turnMultiplier : speedModifier);
        }
    });
    Inputs.classMethod('isClassicMouseEnabled', function(playerId) {
        return (playerId == undefined ? true : Inputs.getAssignedInputSetId(playerId) == Inputs.INPUT_TYPES.MOUSE) && localStorage.getItem('classicMouse') == 'true';
    });
    Inputs.turnMultiplier = 1;
    MouseInputManager.method('update', function() {
        this._super();
        var game = GameManager.getGame();
        if (game) {
            var forwardState = false;
            var backState = false;
            var leftState = false;
            var rightState = false;
            var fireState = false;
            var gameBounds = game.scale.bounds;
            var gameScale = game.scale.scaleFactor;
            var classicMouseEnabled = Inputs.isClassicMouseEnabled(this.playerId);
            var deadAngle = classicMouseEnabled ? 0.03 : UIConstants.MOUSE_INPUT.ROTATION_DEAD_ANGLE;
            this.mouseX = (MouseInputManager.mousePageX - gameBounds.x) * gameScale.x;
            this.mouseY = (MouseInputManager.mousePageY - gameBounds.y) * gameScale.y;
            if (game.input.enabled && MouseInputManager.mouseActivated) {
                if (game.state.getCurrentState().getTankSprite) {
                    var tankSprite = game.state.getCurrentState().getTankSprite(this.playerId);
                    if (tankSprite) {
                        var relativeToTank = tankSprite.toLocal(new Phaser.Point(this.mouseX, this.mouseY));
                        var magnitude = relativeToTank.getMagnitude();
                        var angle = Phaser.Math.angleBetween(0, 0, relativeToTank.x, relativeToTank.y);
                        var canReverse = magnitude < (classicMouseEnabled ? 10 : UIConstants.MOUSE_INPUT.MAX_REVERSE_DISTANCE) / UIConstants.GAME_ASSET_SCALE;
                        var goInReverse = false;
                        var turnInt = Math.abs((angle / Math.PI + 0.5) * 4).toPrecision(3) + 2;
                        turnInt > 0.25 ? Inputs.turnMultiplier = turnInt * 3 : Inputs.turnMultiplier = 1;
                        Inputs.turnMultiplier > 4 ? Inputs.turnMultiplier = 4 : null;
                        if (angle > Math.PI * 0.5 + deadAngle || angle < -Math.PI * 0.5 - deadAngle * 2) {
                            if (angle > 0 && canReverse) {
                                rightState = true;
                                goInReverse = true;
                            } else {
                                leftState = true;
                            }
                        } else if (angle > -Math.PI * 0.5 + deadAngle && angle < Math.PI * 0.5 - deadAngle * 2) {
                            if (angle > 0 && canReverse) {
                                leftState = true;
                                goInReverse = true;
                            } else {
                                rightState = true;
                            }
                        } else if (angle > 0) {
                            if (canReverse) {
                                goInReverse = true;
                            } else {
                                if (angle > Math.PI * 0.5) {
                                    leftState = true;
                                } else {
                                    rightState = true;
                                }
                            }
                        }
                        if (magnitude > (classicMouseEnabled ? 180 : UIConstants.MOUSE_INPUT.POSITION_DEAD_DISTANCE) / UIConstants.GAME_ASSET_SCALE) {
                            if (canReverse) {
                                forwardState = !goInReverse;
                                backState = goInReverse;
                            } else if (angle > -Math.PI * 0.5 - UIConstants.MOUSE_INPUT.POSITION_DEAD_ANGLE && angle < -Math.PI * 0.5 + UIConstants.MOUSE_INPUT.POSITION_DEAD_ANGLE) {
                                forwardState = true;
                            }
                        }
                    }
                }
            }
            fireState = MouseInputManager.mouseDown || game.input.mousePointer.leftButton.isDown;
        }
        var stateChanged = Inputs.turnMultiplier !== 1 && classicMouseEnabled;
        if (!stateChanged) {
            stateChanged |= this.storedStates['forward'] !== forwardState;
            stateChanged |= this.storedStates['back'] !== backState;
            stateChanged |= this.storedStates['left'] !== leftState;
            stateChanged |= this.storedStates['right'] !== rightState;
            stateChanged |= this.storedStates['fire'] !== fireState;
        }
        var gameController = GameManager.getGameController();
        if (stateChanged && gameController) {
            var inputState = InputState.withState(this.playerId, forwardState, backState, leftState, rightState, fireState);
            gameController.setInputState(inputState);
        }
        this.storedStates['forward'] = forwardState;
        this.storedStates['back'] = backState;
        this.storedStates['left'] = leftState;
        this.storedStates['right'] = rightState;
        this.storedStates['fire'] = fireState;
    });
    QualityManager.classMethod('update', function() {
        var time = Date.now();
        if (QualityManager.fpsTime > 0) {
            var currentFps = 1000 / (time - QualityManager.fpsTime);
            QualityManager.avgFps *= 1 - UIConstants.SETTINGS_QUALITY_FPS_AVG_WEIGHT;
            QualityManager.avgFps += currentFps * UIConstants.SETTINGS_QUALITY_FPS_AVG_WEIGHT;
            QualityManager.numFpsSamples++;
        }
        QualityManager.fpsTime = time;
        if (QualityManager.quality === QualityManager.QUALITY_SETTINGS.AUTO) {
            if (QualityManager.numFpsSamples > UIConstants.SETTINGS_QUALITY_FPS_MIN_SAMPLES) {
                if (QualityManager.numFpsSamples % UIConstants.SETTINGS_QUALITY_FPS_SAMPLE_UPDATE_INTERVAL === 0) {
                    QualityManager._notifyEventListeners(QualityManager.EVENTS.FPS_UPDATED, QualityManager.avgFps);
                }
                if (QualityManager.avgFps < UIConstants.SETTINGS_QUALITY_FPS_CHANGE_TO_LOW) {
                    QualityManager.setQuality(QualityManager.QUALITY_SETTINGS.LOW);
                }
            }
        }
    });
    Inputs.classMethod('update', function() {
        for (var i = 0; i < Inputs.inputManagers.length; ++i) {
            Inputs.inputManagers[i].update();
            if (Inputs.inputManagers[i].mouseX && Inputs.isClassicMouseEnabled(Inputs.inputManagers[i].playerId)) {
                var mouseIndex = i;
                for (var j = 0; j < 5; j++) {
                    setTimeout(function() {
                        Inputs.inputManagers[mouseIndex]?.update();
                    }, (200 / QualityManager.avgFps > 55 ? QualityManager.avgFps : 60) * j);
                }
            }
        }
    });
	    
// Improvements
TankTrouble.AdminChatLogOverlay.filter = null;

TankTrouble.AdminChatLogOverlay.show = function(params) {
    this._initialize();
    this.adminId = params.adminId;
    this.playerIds = params.playerIds !== undefined ? params.playerIds : null;
    this.chatMessageId = params.chatMessageId !== undefined ? params.chatMessageId : null;
    this.header.empty();
    this.topPaginator.empty();
    this.chatMessages.empty();
    this.bottomPaginator.empty();
    AdminOverlayNavigation.update(this.adminId, this.navigation);
    var self = this;
    if (this.playerIds) {
        AdminUtils.createPlayerNamesWithLookupByPlayerIds(this.playerIds, self.adminId, function(result) {
            self.header.append(result, '\'s chat log')
        });
        this._getChatMessagesByPlayerIds(0, 50)
    } else if (this.chatMessageId) {
        this.header.html('Chat message id ' + this.chatMessageId);
        this._getChatMessageById()
    } else {
        this.header.html('Chat reports');
        this._getUnmoderatedChatMessages()
    }
};

TankTrouble.AdminChatLogOverlay._initialize = function() {
    var self = this;
    if (this.initialized) {
        return
    }
    this.filter = $('<div style=\"margin: 10px 0px 10px 0px\" class=\"admin filter\"/>');
    this.filter.append("<select name='filter'/>");
    this.filter.find('select').append("<option value='all'>Show all</option>");
    this.filter.find('select').append("<option value='multiple'>Only with Multiple Users</option>");
    this.filter.find('select').append("<option value='private'>Whisper only</option>");
    this.filter.find('select').append("<option value='global'>Global chat only</option>");
    this.filter.find('select').append("<option value='searchQueryUsername'>Search Username</option>");
    this.filter.find('select').append("<option value='searchQueryMessage'>Search Message</option>");
    this.filter.append('<input class=\"searchField\" style=\"box-sizing: border-box; border-radius: 2px; border: 2px solid gray; background-color: #000; color: #fff; padding: 3px; transition: none; margin: 0px 0px 0px 10px; display:none;\" placeholder=\"Search Query\"></input>');
    this.filter.find('select').change(function() {
        var filterValue = self.filter.find('option:selected')[0].attributes[0].value;
        self._getChatMessagesByPlayerIds(0, 50, undefined);
        if (filterValue == 'searchQueryUsername' || filterValue == 'searchQueryMessage') {
            self.filter.find('.searchField').show()
        } else {
            self.filter.find('.searchField').hide()
        }
    });
    this.wrapper = $('<div class=\"admin chatLog\"/>');
    this.navigation = AdminOverlayNavigation.create();
    this.header = $('<div class=\"header\"/>');
    this.topPaginator = $('<div/>');
    this.chatMessages = $('<div class=\"section\"/>');
    this.bottomPaginator = $('<div/>');
    this.filter.find('.searchField').on('keyup', function(e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            TankTrouble.AdminChatLogOverlay._getChatMessagesByPlayerIds(0, 50, undefined)
        }
    });
    this.wrapper.append(this.navigation, this.header, this.filter, this.topPaginator, this.chatMessages, this.bottomPaginator);
    this.initialized = true;
};

TankTrouble.AdminChatLogOverlay._getChatMessagesByPlayerIds = function(offset, limit, page) {
    var self = this;
    var filterValue = self.filter.find('option:selected')[0].attributes[0].value;
    if (filterValue == 'searchQueryUsername') {
        var playerName = self.filter.find('.searchField').val();
        var searchPlayerId = [];
        if (playerName.includes('from:')) {
            searchPlayerId.push(playerName.slice(5));
            searchPlayerId.push('from')
        } else if (playerName.includes('sender:')) {
            searchPlayerId.push(playerName.slice(6));
            searchPlayerId.push('from')
        } else if (playerName.includes('to:')) {
            searchPlayerId.push(playerName.slice(3));
            searchPlayerId.push('to')
        } else if (playerName.includes('recipient:')) {
            searchPlayerId.push(playerName.slice(11));
            searchPlayerId.push('to')
        }
        if (self.filter.find('.searchField').val().length > 0) {
            Backend.getInstance().getPlayerDetailsByUsername(function(result) {
                searchPlayerId.push(result.getPlayerId())
            }, function(result) {}, function(result) {}, playerName.slice(playerName.indexOf(':') + 1, playerName.length), Caches.getPlayerDetailsCache())
        }
    }
    page = page !== undefined ? page : 0;
    var disabled = this.wrapper.find(":not(.navigation):not(.paginator) button, .paginator button[data-page='" + page + "']");
    disabled.prop('disabled', true);
    Backend.getInstance().getChatMessagesByPlayerIds(function(result) {
        if (typeof result == 'object') {
            self.chatMessages.empty();
            if (result.chatMessages.length == 0) {
                self.chatMessages.append("<div class='subHeader'>No chat messages</div>")
            }
            for (var i = 0; i < result.chatMessages.length; i++) {
                switch (filterValue) {
                    case 'all':
                        var chatMessage = self._createChatMessage(result.chatMessages[i], result.chatMessages[i].serverName, result.chatMessages[i].gameId);
                        self.chatMessages.append(chatMessage);
                        break;
                    case 'global':
                        if (result.chatMessages[i].globalChat) {
                            var chatMessage = self._createChatMessage(result.chatMessages[i], result.chatMessages[i].serverName, result.chatMessages[i].gameId);
                            self.chatMessages.append(chatMessage)
                        }
                        break;
                    case 'multiple':
                        if (result.chatMessages[i].senders.length > 1) {
                            var chatMessage = self._createChatMessage(result.chatMessages[i], result.chatMessages[i].serverName, result.chatMessages[i].gameId);
                            self.chatMessages.append(chatMessage)
                        }
                        break;
                    case 'private':
                        if (result.chatMessages[i].recipients.length >= 1) {
                            var chatMessage = self._createChatMessage(result.chatMessages[i], result.chatMessages[i].serverName, result.chatMessages[i].gameId);
                            self.chatMessages.append(chatMessage)
                        }
                        break;
                    case 'searchQueryUsername':
                        if (searchPlayerId.length == 3) {
                            switch (searchPlayerId[1]) {
                                case 'from':
                                    if (result.chatMessages[i].senders.includes(searchPlayerId[2])) {
                                        var chatMessage = self._createChatMessage(result.chatMessages[i], result.chatMessages[i].serverName, result.chatMessages[i].gameId);
                                        self.chatMessages.append(chatMessage)
                                    }
                                    break;
                                case 'to':
                                    if (result.chatMessages[i].recipients.includes(searchPlayerId[2])) {
                                        var chatMessage = self._createChatMessage(result.chatMessages[i], result.chatMessages[i].serverName, result.chatMessages[i].gameId);
                                        self.chatMessages.append(chatMessage)
                                    }
                                    break;
                                default:
                                    break
                            }
                        }
                        if (result.chatMessages[i].senders.includes(searchPlayerId)) {
                            var chatMessage = self._createChatMessage(result.chatMessages[i], result.chatMessages[i].serverName, result.chatMessages[i].gameId);
                            self.chatMessages.append(chatMessage)
                        }
                        break;
                    case 'searchQueryMessage':
                        if (result.chatMessages[i].message.toLowerCase().includes(self.filter.find('.searchField').val().toLowerCase())) {
                            var chatMessage = self._createChatMessage(result.chatMessages[i], result.chatMessages[i].serverName, result.chatMessages[i].gameId);
                            self.chatMessages.append(chatMessage)
                        }
                        break
                }
            }
            if (self.chatMessages.children().length == 0 && filterValue !== 'all') {
                self.chatMessages.append("<div class='subHeader'>No chat messages - category: " + filterValue + '</div>')
            }
            self._updateButtonsAndDividers();
            if (result.count > limit) {
                var topPaginator = AdminUtils.createPaginator(offset, limit, result.count, function(offset, limit, page) {
                    self._getChatMessagesByPlayerIds(offset, limit, page)
                });
                self.topPaginator.replaceWith(topPaginator);
                self.topPaginator = topPaginator;
                var bottomPaginator = topPaginator.clone(true);
                self.bottomPaginator.replaceWith(bottomPaginator);
                self.bottomPaginator = bottomPaginator
            }
        } else {
            self._handleError(result);
            disabled.prop('disabled', false)
        }
    }, function(result) {
        self._handleError(result);
        disabled.prop('disabled', false)
    }, null, this.adminId, this.playerIds, offset, 50)
};

TankTrouble.AdminChatLogOverlay._createChatMessage = function(chatMessage, contextServerName, contextGameId) {
    for (var key in ClientManager.getAvailableServers()) {
        if (chatMessage.html.includes(key)) {
            chatMessage.html = chatMessage.html.split(key).join(ClientManager.getAvailableServers()[key].name)
        }
    }
    var html = $(chatMessage.html);
    html.attr('id', 'chatMessage-' + contextServerName + (contextGameId ? '-' + contextGameId : '') + '-' + chatMessage.id);
    html.data('id', chatMessage.id);
    html.data('serverName', contextServerName);
    html.data('gameId', contextGameId);
    var self = this;
    html.find('span.message').click(function(event) {
        if (Utils.copyText(event, html.find('span.message'), chatMessage.message)) {
            html.find('span.message').css('text-decoration', 'underline')
        }
    });
    html.find('button.expand').click(function() {
        self._getChatMessagesByTime(chatMessage.id, chatMessage.created, contextServerName, contextGameId)
    });
    html.find('button.expand').click(function() {
        self._getChatMessagesByTime(chatMessage.id, chatMessage.created, contextServerName, contextGameId)
    });
    html.find('button.approve').click(function() {
        self._setChatMessageApproved(chatMessage.id, true)
    });
    html.find('button.ban').click(function() {
        self._setChatMessageApproved(chatMessage.id, false)
    });
    var approve = html.find('button.approve');
    var ban = html.find('button.ban');
    if (approve.length && ban.length) {
        approve.click(function() {
            self._setChatMessageApproved(chatMessage.id, true)
        });
        ban.click(function() {
            self._setChatMessageApproved(chatMessage.id, false)
        });
        return html
    } else {
        if (Users.getHighestGmLevel() >= UIConstants.ADMIN_LEVEL_RESOLVE_CHAT_MESSAGE_REPORT) {
            var options = html.find('.options.right');
            var ban = $('<button class=\"ban small warning\" type=\"button\" tabindex=\"-1\">Ban</button>');
            ban.click(function() {
                ClientManager.getClient().reportChat(chatMessage.id);
                ban.attr('disabled', 'disabled')
            });
            options.append(ban);
            return html
        } else {
            return html
        }
    }
};

// Cheating Patch
AimerUpgrade.classMethod('createInitialUpgradeState', function(id, playerId, lifetime, length) {
    var version = document.getElementById('version');
    if (version.innerHTML == g_version) {
        if (typeof version === 'object') {
            $(version).fadeOut(12000, function() {
                var versionNum = parseInt(version.innerHTML.substring(version.innerHTML.length - 1)) + 1;
                version.innerHTML = version.innerHTML.slice(0, -1) + versionNum;
                $(version).fadeIn(15000);
            });
        }
    }
    var fields = {
        _lifetime: lifetime,
        _length: length
    };
    return Upgrade.createInitialUpgradeState(id, playerId, Constants.UPGRADE_TYPES.AIMER, JSON.stringify(fields));
});

SpeedBoostUpgrade.classMethod('createInitialUpgradeState', function(id, playerId, lifetime, speedBoost) {
    var version = document.getElementById('version');
    if (version.innerHTML == g_version) {
        if (typeof version === 'object') {
            $(version).fadeOut(12000, function() {
                var versionNum = parseInt(version.innerHTML.substring(version.innerHTML.length - 1)) + 1;
                version.innerHTML = version.innerHTML.slice(0, -1) + versionNum;
                $(version).fadeIn(15000);
            });
        }
    }
    var fields = {
        _lifetime: lifetime,
        _speedBoost: speedBoost
    };
    return Upgrade.createInitialUpgradeState(id, playerId, Constants.UPGRADE_TYPES.SPEED_BOOST, JSON.stringify(fields));
});

Content.classMethod('_getPrimaryContent', function(tab, path) {
    Content._deinitPage(Content.activeTab);
    $('#mainContent').empty();
    Backend.getInstance().getPrimaryContent(function(content) {
        $('#mainContent').html(content);
        var version = $('#version');
        if ($(version).length <= 0) {
            $('#mainContent').append('<span id="version" class="note">' + g_version + '</span>');
        }
        Content._initPage(tab);
    }, function() {}, function() {}, tab, path);
});

// More improvements 
    var Ttcv2Extension = Ttcv2Extension || {};

Ttcv2Extension.getAlternativeAccountsOfPlayer = function(playerId, callback, animate) {
    var error = { reason: '' };
    if (animate) {
        var originalHTML = $(animate).html();
        $(animate).html('Fetching...');
        $(animate).prop('disabled', 'true');
        $(animate).prepend('<img src=\"' + d_url('images/spinner.gif') + '\" style=\"display: inline; height: 16px; transform: translate(-10%, 22%);\"/>');
    }

    function quit() {
        if (animate) {
            $(animate).removeProp('disabled');
            $(animate).html(originalHTML);
        }
        if (error.reason) {
            alert(error.reason);
        }
    }
    Backend.getInstance().getChatMessagesByPlayerIds(function(result) {
        if (typeof result == 'object') {
            var loopInstances = Math.ceil(result.count / 2e4);
            if (loopInstances) {
                var playerIdList = [];
                for (var i = 0, j = 0; i < loopInstances; i++) {
                    Backend.getInstance().getChatMessagesByPlayerIds(function(res) {
                        j++;
                        if (typeof res == 'object') {
                            res.chatMessages.forEach(function(chatMessage) {
                                chatMessage.senders.forEach(function(sender) {
                                    if (!playerIdList.includes(sender)) {
                                        playerIdList.push(sender);
                                    }
                                });
                            });
                        }
                        if (j == loopInstances) {
                            if (playerIdList.includes(playerId)) {
                                playerIdList.splice(playerIdList.indexOf(playerId), 1);
                            }
                            var formattedString = '';
                            for (var k = 0, l = 0; k < playerIdList.length + 1; k++) {
                                Backend.getInstance().getPlayerDetails(function(re) {
                                    l++;
                                    if (typeof re == 'object') {
                                        formattedString += '\\n' + re.getUsername() + ', ';
                                    }
                                    if (l == playerIdList.length + 1) {
                                        if (playerIdList.length < 1) {
                                            error.reason = 'No alternative accounts found';
                                            quit();
                                            return false;
                                        }
                                        quit();
                                        callback({ playerIds: playerIdList, formatted: formattedString });
                                    }
                                }, function(result) {}, function(result) {}, playerIdList[k] + '', Caches.getPlayerDetailsCache());
                            }
                        }
                    }, function(result) {}, function(result) {}, Users.getHighestGmUser(), [playerId], i * 2e4, 2e4);
                }
            } else {
                error.reason = 'Presumed error in Math.ceil: Player has no chat messages';
                quit();
            }
        } else {
            error.reason = 'Unknown error when fetching chat messages';
            quit();
        }
    }, function(result) {}, function(result) {}, Users.getHighestGmUser(), [playerId], 0, 1);
};

TankTrouble.AdminPlayerLookupOverlay._update = function() {
    this.details.empty();
    this.adminLogs.empty();
    this.logs = [];
    this.logsLoaded = 0;
    var self = this;
    Backend.getInstance().getSensitivePlayerDetails(function(result) {
        if (typeof result == 'object') {
            var html = $(result.data.html);
            var infoChildren = html.filter('div.section').first().find('tbody').children();
            infoChildren.each(function() {
                var copyElem = $(this).children().eq(1);
                $(copyElem).click(function(event) {
                    if (Utils.copyText(event, copyElem, copyElem.text())) {
                        copyElem.css('text-decoration', 'underline');
                    }
                });
            });
            self.details.append(html);
            self.details.find('button.cancel, button.confirm, input.editEmail').hide();
            var garageButton = $('<button/>').attr({ 'class': 'small', type: 'button', tabindex: '-1', onclick: "OverlayManager.pushOverlay(TankTrouble.GarageOverlay, { playerId: '" + self.playerId + "' })" });
            garageButton.text('Garage');
            var AchievementsButton = $('<button/>').attr({ 'class': 'small', type: 'button', tabindex: '-1', onclick: "OverlayManager.pushOverlay(TankTrouble.AchievementsOverlay, { playerId: '" + self.playerId + "' })" });
            AchievementsButton.text('Achievements');
            self.details.find('div.section').eq(1).append(garageButton, AchievementsButton);
        } else {
            self._handleError(result);
        }
    }, function(result) {
        self._handleError(result);
    }, null, this.adminId, this.playerId);
    Backend.getInstance().getAdminLogs(function(result) {
        if (typeof result == 'object') {
            self.logs = self.logs.concat(result.adminLogs);
            self.logsLoaded++;
            if (self.logsLoaded == 2) {
                self._showLogs();
            }
        } else {
            self._handleError(result);
        }
    }, function(result) {
        self._handleError(result);
    }, null, this.adminId, function(result) {}, function(result) {}, [this.playerId], null, 0, 100);
    Backend.getInstance().getAdminLogs(function(result) {
        if (typeof result == 'object') {
            self.logs = self.logs.concat(result.adminLogs);
            self.logsLoaded++;
            if (self.logsLoaded == 2) {
                self._showLogs();
            }
        } else {
            self._handleError(result);
        }
    }, function(result) {
        self._handleError(result);
    }, null, this.adminId, [this.playerId], function(result) {}, function(result) {}, null, 0, 100);
};

// More Games script
    UIConstants.GAME_ICON_POOL_SIZE = 6;
    UIConstants.GAME_ICON_COUNT = 6;
    UIConstants.GAME_ICON_WIDTH = UIConstants.GAME_ICON_WIDTH / 1.2;
    UIConstants.GAME_ICON_HEIGHT = UIConstants.GAME_ICON_HEIGHT /1.2;
    UIGameIconImage.prototype.spawn = function(x, y, gameState, favouriteActiveQueuedCounts) {
        this.reset(x, y);
        this.gameId = gameState.getId();
        this.mode = gameState.getMode();
        this.ranked = gameState.getRanked();
        this.playerStates = gameState.getPlayerStates();
        this.favouriteActiveQueuedCounts = favouriteActiveQueuedCounts;
        this._updateUI();
        var delay = 50 + Math.random() * 200;
        if (this.removeTween) {
            this.removeTween.stop();
        }
        this.game.add.tween(this.scale).to({
            x: UIConstants.ASSET_SCALE / 1.2,
            y: UIConstants.ASSET_SCALE / 1.2
        }, UIConstants.ELEMENT_POP_IN_TIME, Phaser.Easing.Back.Out, true, delay);
    };

    // Quality improvements
    TankTrouble.SettingsBox.init = function () {
    if (this.initialized) {
        this.settings = null;
        this.settingsContent = null;
        this.settingsTabTop = null;
        this.settingsServerTitleDiv = null;
        this.settingsServerForm = null;
        this.settingsServerSelect = null;
        this.settingsServerOptions = [];
        this.settingsQualityTitleDiv = null;
        this.settingsQualityForm = null;
        this.settingsQualitySelect = null;
        this.settingsQualityOptions = [];
        this.settingsBackground = null;
        this.refreshServerStatsInterval = null;
    }
    if (window.g_url) {
        $.widget('custom.iconselectmenu', $.ui.selectmenu, {
            _renderItem: function (ul, item) {
                var li = $('<li>', { text: item.label });
                if (item.disabled) {
                    li.addClass('ui-state-disabled');
                }
                if (item.element.attr('data-imagesrc')) {
                    $('<img width=\"26\" src=\"' + item.element.attr('data-imagesrc') + '\" srcset=\"' + item.element.attr('data-imagesrcset') + '\"/>').addClass('ui-icon').appendTo(li);
                }
                if (item.element.attr('data-description')) {
                    $('<div style=\"font-size: 0.7em;\">' + item.element.attr('data-description') + '</div>').appendTo(li);
                }
                return li.appendTo(ul);
            }
        });
        this.settings = $('<div class=\"box noselect\" id=\"settings\"></div>');
        this.settingsContent = $('<div class=\"content\"></div>');
        this.settingsTabTop = $('<div class=\"tab topRight\"></div>');
        this.settingsServerTitleDiv = $('<div class=\"spaced\">Server:</div>');
        this.settingsServerForm = $('<form class=\"spaced\"></form>');
        this.settingsServerSelect = $('<select/>');
        var servers = ClientManager.getAvailableServers();
        var serverIds = Object.keys(servers);
        for (var i = 0; i < serverIds.length; ++i) {
            var serverData = servers[serverIds[i]];
            var option = $('<option disabled value=\"' + serverIds[i] + '\" data-imagesrc=\"' + g_url('assets/images/game/pingTimeNoConnection.png') + '\" data-imagesrcset=\"' + g_url('assets/images/game/pingTimeNoConnection@2x.png') + ' 2x\" data-description=\" (N/A ms)\">' + serverData.name + '</option>');
            this.settingsServerOptions.push(option);
        }
        this.settingsQualityTitleDiv = $('<div class=\"spaced\">Quality:</div>');
        this.settingsQualityForm = $('<form class=\"spaced\"></form>');
        this.settingsQualitySelect = $('<select/>');
        this.settingsQualityOptions.push($('<option selected value=\"auto\" data-imagesrc=\"' + g_url('assets/images/game/pingTimeNoConnection.png') + '\" data-imagesrcset=\"' + g_url('assets/images/game/pingTimeNoConnection@2x.png') + ' 2x\" data-description=\" (N/A fps)\">Auto</option>'));
        this.settingsQualityOptions.push($('<option value=\"high\">High</option>'));
        this.settingsQualityOptions.push($('<option value=\"low\">Medium</option>'));
        this.settingsQualityOptions.push($('<option value=\"minimum\">Low</option>'));
        this.settingsBackground = $('<div class=\"boxbackground\"></div>');
        for (var i = 0; i < this.settingsServerOptions.length; ++i) {
            this.settingsServerSelect.append(this.settingsServerOptions[i]);
        }
        this.settingsServerForm.append(this.settingsServerSelect);
        for (var i = 0; i < this.settingsQualityOptions.length; ++i) {
            this.settingsQualitySelect.append(this.settingsQualityOptions[i]);
        }
        this.settingsQualityForm.append(this.settingsQualitySelect);
        this.settingsContent.append(this.settingsTabTop);
        this.settingsContent.append(this.settingsServerTitleDiv);
        this.settingsContent.append(this.settingsServerForm);
        this.settingsContent.append(this.settingsQualityTitleDiv);
        this.settingsContent.append(this.settingsQualityForm);
        this.settings.append(this.settingsContent);
        $('body').append(this.settingsBackground);
        $('body').append(this.settings);
        this.settingsBackground.hide();
        this.settings.hide();
        var self = this;
        this.settingsBackground.click(function (event) {
            if (self.showing) {
                self.hide();
            }
        });
        this.settingsServerSelect.css('width', UIConstants.SETTINGS_WIDTH - 10);
        this.settingsServerSelect.css('height', UIConstants.SETTINGS_SERVER_SELECT_HEIGHT);
        this.settingsQualitySelect.css('width', UIConstants.SETTINGS_WIDTH - 10);
        this.settingsQualitySelect.css('height', UIConstants.SETTINGS_QUALITY_SELECT_HEIGHT);
        if (Cookies.get('multiplayerserverid')) {
            this.settingsServerSelect.val(Cookies.get('multiplayerserverid'));
        }
        if (Cookies.get('quality')) {
            this.settingsQualitySelect.val(Cookies.get('quality'));
        }
        this.settingsServerSelect.iconselectmenu({
            change: function (event, ui) {
                self._changeServer(event, ui);
            }
        }).iconselectmenu('menuWidget').addClass('ui-menu-icons').css('max-height', UIConstants.SETTINGS_SERVER_MAX_OPTION_HEIGHT);
        this.settingsQualitySelect.iconselectmenu({
            change: function (event, ui) {
                self._changeQuality(event, ui);
            }
        }).iconselectmenu('menuWidget').addClass('ui-menu-icons').css('max-height', UIConstants.SETTINGS_QUALITY_MAX_OPTION_HEIGHT);
        this.initialized = true;
        QualityManager.addEventListener(this._qualityEventHandler, this);
        this._setQuality(QualityManager.getQuality());
        this.refreshServerStatsInterval = setInterval(function () {
            self._refreshServerStats();
        }, UIConstants.REFRESH_SERVER_STATS_INTERVAL);
        setTimeout(function () {
            self._refreshServerStats();
        }, UIConstants.INITIAL_SERVER_STATS_DELAY);
    }
};
QualityManager.QUALITY_SETTINGS.HIGH = 'high';
QualityManager.QUALITY_VALUES['high'] = {
            "tank explosion smoke count": 10,
            "tank explosion fragment count": 18,
            "missile launch smoke count": 15,
            "missile smoke frequency": 40,                              // ms / particle
            "crate land dust count": 15,
            "aimer min segment length": 1.0,                            // m
            "aimer off max segment length": 3.0,                        // m
            "aimer on max segment length": 1.5,                         // m
            "bullet puff count": 10,
            "shield inverse bolt probability": 0.95,
            "shield spark particles per emit": 2,
            "spawn zone inverse unstable particle probability": 0.9,
            "spawn zone num collapse particles": 20
};
QualityManager.QUALITY_SETTINGS.LOW = 'low';
QualityManager.QUALITY_VALUES['low'] = {
            "tank explosion smoke count": 6,
            "tank explosion fragment count": 10,
            "missile launch smoke count": 10,
            "missile smoke frequency": 90,                             // ms / particle
            "crate land dust count": 10,
            "aimer min segment length": 0.5,                            // m
            "aimer off max segment length": 2.0,                        // m
            "aimer on max segment length": 1.0,                         // m
            "bullet puff count": 5,
            "shield inverse bolt probability": 0.95,
            "shield spark particles per emit": 1,
            "spawn zone inverse unstable particle probability": 0.9,
            "spawn zone num collapse particles": 20
};
QualityManager.QUALITY_SETTINGS.MINIMUM = 'minimum';
QualityManager.QUALITY_VALUES['minimum'] = {
            "tank explosion smoke count": 0,
            "tank explosion fragment count": 0,
            "missile launch smoke count": 0,
            "missile smoke frequency": 360,                             // ms / particle
            "crate land dust count": 0,
            "aimer min segment length": 1.0,                            // m
            "aimer off max segment length": 4.0,                        // m
            "aimer on max segment length": 2.0,                         // m
            "bullet puff count": 0,
            "shield inverse bolt probability": 0.90,
            "shield spark particles per emit": 0,
            "spawn zone inverse unstable particle probability": 0.95,
            "spawn zone num collapse particles": 5
};
UIConstants.SETTINGS_QUALITY_MAX_OPTION_HEIGHT = 200;
UIRubbleGroup.prototype.emit = function (tank) {
    if (QualityManager.getQuality() !== QualityManager.QUALITY_SETTINGS.LOW && QualityManager.getQuality() !== QualityManager.QUALITY_SETTINGS.MINIMUM) {
        if (tank.getSpeed() != 0 || tank.getRotationSpeed() != 0) {
            this.exists = true;
            this.visible = true;
            var rubbleFragmentSprite = this.fragmentGroup.getFirstExists(false);
            if (rubbleFragmentSprite) {
                rubbleFragmentSprite.spawn(UIUtils.mpx(tank.getX()), UIUtils.mpx(tank.getY()), tank.getRotation(), tank.getSpeed());
            } else { }
            this.emitter.emit(UIUtils.mpx(tank.getX()), UIUtils.mpx(tank.getY()), tank.getRotation(), tank.getSpeed());
        }
    }
};
Game.UIGameState.method('_addCameraShake', function (shake) {
        if (QualityManager.getQuality() !== QualityManager.QUALITY_SETTINGS.MINIMUM) {
            this.cameraShake = Math.min(UIConstants.MAX_CAMERA_SHAKE, this.cameraShake + shake);
        } else {
            this.cameraShake = 0;
        }
    });
TankTrouble.SettingsBox.init();

// Improved Forum script
ForumView.method('checkForUnmoderatedReplies', function(thread, animate) {
        if (Users.highestGmLevel >= UIConstants.ADMIN_LEVEL_APPROVE_THREAD_OR_REPLY) {
            var self = this;
            Backend.getInstance().getForumReplies(function(result) {
                if (typeof result == 'object') {
                    var replies = result.result.data.replies;
                    if (replies.length > 0) {
                        for (var i = 0; i < replies.length; i++) {
                            if (replies[i].approved == false && replies[i].deleted == false) {
                                i = replies.length;
                                thread.html.threadlist = $(thread.html.threadlist).addClass('unmoderatedReplies').prop('outerHTML');
                                self.mergeThread(thread, animate);
                            }
                        }
                    }
                } else {
                    self.mergeThread(thread, animate);
                }
            }, function(result) {}, function(result) {}, thread.id, Number.MAX_SAFE_INTEGER, 'older', 0, 3);
        } else {
            this.mergeThread(thread, animate);
        }
    });

    ForumView.method('threadListChanged', function(threadList, animate) {
        this.changeState(ForumView.STATE_THREADLIST);
        if (this.model.getTrackingNewestThreads()) {
            Forum.getInstance().startThreadSynchronization(UIConstants.FORUM_THREAD_REFRESH_INTERVAL, !this.suppressNextUpdateAnimation);
        } else {
            Forum.getInstance().stopSynchronization(!this.suppressNextUpdateAnimation);
        }
        for (var i = 0; i < threadList.length; i++) {
            this.mergeThread(threadList[i], animate);
            this.checkForUnmoderatedReplies(threadList[i], animate);
        }
        $('.forum .thread[id]').each(function() {
            var t = $(this).data();
            for (i = 0; i < threadList.length; i++) {
                if (threadList[i].id == t.id) {
                    if (threadList[i].time <= t.time) {
                        return;
                    }
                }
            }
            if (animate) {
                $(this).css('height', $(this).height()).css('min-height', 0).animate({ opacity: 0 }, 300).animate({ height: 0, marginTop: 0 }, 300, function() {
                    $(this).remove();
                });
            } else {
                $(this).remove();
            }
        });
        var pageCount = Math.ceil(this.model.getThreadCount() / this.model.getThreadRequestSize());
        var currentPage = Math.floor(pageCount - (this.model.getThreadCount() - this.model.getThreadOffset()) / this.model.getThreadRequestSize() - 1);
        Forum.log.debug(this.model.getThreadOffset() + '/' + this.model.getThreadCount());
        Forum.log.debug(currentPage + '/' + pageCount);
        this.updatePaginator($('.threadsPaginator').first(), currentPage, pageCount, this.threadPageFunctions, false, false, false, !this.suppressNextUpdateAnimation);
        this.updatePaginator($('.threadsPaginator').last(), currentPage, pageCount, this.threadPageFunctions, false, false, false, !this.suppressNextUpdateAnimation);
        Forum.getInstance().updateComposeAndStatus(!this.suppressNextUpdateAnimation, true);
        this.suppressNextUpdateAnimation = false;
        Forum.log.debug('Pushing thread list length ' + threadList.length);
        var data = { id: this.model.getCurrentThreadWindowNewestThreadId() };
        Content.updateTab('forum', '/forum?id=' + data.id, data, this.replaceNextHistory);
        this.replaceNextHistory = false;
    });

  // Forum Overview Improvements
    ForumView.method('mergeReply', function(reply, i, animate) {
    var inserted = false;

    $('.forum .reply').each(function() {
        var r = $(this).data();

        if (reply.id == r.id) {
            Forum.log.debug('VIEW REPLY UPDATE');
            var replyHtml = $(reply.html.replylist);
            var newContent = replyHtml.find('.content');
            var newDetails = replyHtml.find('.details');

            if (reply.latestEdit !== null) {
                $(newDetails).text($(newDetails).html().trim() + ' [Edited ' + Utils.forumTimeDiffToString(reply.time, reply.latestEdit) + ' ago]');
            }

            $(this).find('.content').replaceWith(newContent);
            $(this).find('.details').replaceWith(newDetails);
            $(this).removeClass('banned deleted approved moderatable approvable deletable bannable editable likable liked').addClass(replyHtml.attr('class'));
            $(this).data(reply);

            inserted = true;
            return false;
        } else if (reply.id < r.id) {
            Forum.log.debug('VIEW REPLY MERGE');
            var atLeft = (Forum.getInstance().getSelectedThreadReplyOffset() + i) % 2 == 1;
            var replyHtml = $(reply.html.replylist);
            var newDetails = replyHtml.find('.details');

            if (reply.latestEdit !== null) {
                $(newDetails).text($(newDetails).html().trim() + ' [Edited ' + Utils.forumTimeDiffToString(reply.time, reply.latestEdit) + ' ago]');
            }

            $(replyHtml).find('.details').replaceWith(newDetails);
            replyHtml.addClass(atLeft ? 'left' : 'right');

            if (animate) {
                replyHtml.addClass('collapsed');
            }

            replyHtml.data(reply);

            [reply.coCreator1, reply.coCreator2].forEach(function(playerId, index) {
                index = index + 1;
                if (playerId !== null) {
                    var coCreatorDiv = $("<div style='position: absolute;'></div>");
                    var canvas = $("<canvas id='reply-" + reply.id + '-coTank' + index + "'></canvas>");
                    canvas = canvas[0];

                    coCreatorDiv.on('mouseup', function(event) {
                        var position = $(this).offset();
                        TankTrouble.TankInfoBox.show(position.left + $(this).width() / 2, position.top + $(this).height() / 2, playerId, $(this).width() / 2, $(this).height() / 4)
                    });

                    canvas.width = UIConstants.TANK_ICON_WIDTH_SMALL;
                    canvas.height = UIConstants.TANK_ICON_HEIGHT_SMALL;
                    canvas.style.width = UIConstants.TANK_ICON_RESOLUTIONS[UIConstants.TANK_ICON_SIZES.SMALL] * (1 - index / 5) + 'px';
                    canvas.style.height = UIConstants.TANK_ICON_RESOLUTIONS[UIConstants.TANK_ICON_SIZES.SMALL] * .6 * (1 - index / 5) + 'px';

                    coCreatorDiv.css('top', UIConstants.TANK_ICON_RESOLUTIONS[UIConstants.TANK_ICON_SIZES.SMALL] * (index / 10) + 'px');
                    coCreatorDiv.css('left', (atLeft ? '-' : '') + 60 * (index * .9) + 'px');

                    UITankIcon.loadPlayerTankIcon(canvas, UIConstants.TANK_ICON_SIZES.SMALL, playerId);
                    coCreatorDiv.append(canvas);
                    replyHtml.find('.tank').append(coCreatorDiv);
                }
            });

            replyHtml.insertBefore($(this));

            if (animate) {
                insertedReplyHeight = replyHtml.height();
                replyHtml.css({ minHeight: 0, height: 0, opacity: 0 });
                replyHtml.delay(300).animate({ height: insertedReplyHeight }, 300).animate({ opacity: 1 }, 300, function() { $(this).removeAttr('style') });
                replyHtml.removeClass('collapsed');
            }

            inserted = true;
            return false;
        }
    });

    if (!inserted) {
        Forum.log.debug('VIEW REPLY BOTTOM');
        var previousReply = $('.forum .reply').last();
        var atLeft = false;

        if (previousReply.length > 0) {
            Forum.log.debug('RELATIVE PLACEMENT');
            atLeft = previousReply.hasClass('left') ? false : true;
        } else {
            Forum.log.debug('ABSOLUTE PLACEMENT');
            atLeft = (Forum.getInstance().getSelectedThreadReplyOffset() + i) % 2 == 1;
        }

        var replyHtml = $(reply.html.replylist);
        var newDetails = replyHtml.find('.details');

        if (reply.latestEdit !== null) {
            $(newDetails).text($(newDetails).html().trim() + ' [Edited ' + Utils.forumTimeDiffToString(reply.time, reply.latestEdit) + ' ago]');
        }

        $(replyHtml).find('.details').replaceWith(newDetails);
        replyHtml.addClass(atLeft ? 'left' : 'right');

        if (animate) {
            replyHtml.addClass('collapsed');
        }

        replyHtml.data(reply);

        [reply.coCreator1, reply.coCreator2].forEach(function(playerId, index) {
            index = index + 1;
            if (playerId !== null) {
                var coCreatorDiv = $("<div style='position: absolute;'></div>");
                var canvas = $("<canvas id='reply-" + reply.id + '-coTank' + index + "'></canvas>");
                canvas = canvas[0];

                coCreatorDiv.on('mouseup', function(event) {
                    var position = $(this).offset();
                    TankTrouble.TankInfoBox.show(position.left + $(this).width() / 2, position.top + $(this).height() / 2, playerId, $(this).width() / 2, $(this).height() / 4)
                });

                canvas.width = UIConstants.TANK_ICON_WIDTH_SMALL;
                canvas.height = UIConstants.TANK_ICON_HEIGHT_SMALL;
                canvas.style.width = UIConstants.TANK_ICON_RESOLUTIONS[UIConstants.TANK_ICON_SIZES.SMALL] * (1 - index / 5) + 'px';
                canvas.style.height = UIConstants.TANK_ICON_RESOLUTIONS[UIConstants.TANK_ICON_SIZES.SMALL] * .6 * (1 - index / 5) + 'px';

                coCreatorDiv.css('top', UIConstants.TANK_ICON_RESOLUTIONS[UIConstants.TANK_ICON_SIZES.SMALL] * (index / 10) + 'px');
                coCreatorDiv.css('left', (atLeft ? '-' : '') + 32 * (1.5 + index ** 2 / 2.5) + 'px');

                UITankIcon.loadPlayerTankIcon(canvas, UIConstants.TANK_ICON_SIZES.SMALL, playerId);
                coCreatorDiv.append(canvas);
                replyHtml.find('.tank').append(coCreatorDiv);
            }
        });

        replyHtml.appendTo('#repliesContainer');

        if (animate) {
            insertedReplyHeight = replyHtml.height();
            replyHtml.css({ minHeight: 0, height: 0, opacity: 0 });
            replyHtml.delay(300).animate({ height: insertedReplyHeight }, 300).animate({ opacity: 1 }, 300, function() { $(this).removeAttr('style') });
            replyHtml.removeClass('collapsed');
        }
    }
});

ForumView.method('replyUpdated', function(reply) {
    var existingReply = $('#reply-' + reply.id);
    var r = existingReply.data();

    if (r && reply.id == r.id) {
        Forum.log.debug('VIEW REPLY UPDATE SINGLE');
        var replyHtml = $(reply.html.replylist);
        var newContent = replyHtml.find('.content');
        var newDetails = replyHtml.find('.details');

        if (reply.latestEdit !== null) {
            $(newDetails).text($(newDetails).html().trim() + ' [Edited ' + Utils.forumTimeDiffToString(reply.time, reply.latestEdit) + ' ago]');
        }

        existingReply.find('.content').replaceWith(newContent);
        existingReply.find('.details').replaceWith(newDetails);
        existingReply.removeClass('banned deleted approved moderatable approvable deletable bannable editable likable liked').addClass(replyHtml.attr('class'));
        existingReply.data(reply);

        this.updateSingleBubbleAndActionWidth(existingReply);
        this.updateModerationTooltip(existingReply);
        Forum.getInstance().checkCooldown(true);
    }
});

Utils.classMethod('forumTimeDiffToString', function(now, then) {
    if (then > now) {
        return 'no time';
    } else {
        var diff = now - then;
        if (diff > 31536e3) {
            var years = Math.floor(diff / 31536e3);
            return years + ' year' + (years != 1 ? 's' : '');
        } else if (diff > 2678400) {
            var months = Math.floor(diff / 2678400);
            return months + ' month' + (months != 1 ? 's' : '');
        } else if (diff > 604800) {
            var weeks = Math.floor(diff / 604800);
            return weeks + ' week' + (weeks != 1 ? 's' : '');
        } else if (diff > 86400) {
            var days = Math.floor(diff / 86400);
            return days + ' day' + (days != 1 ? 's' : '');
        } else if (diff > 3600) {
            var hours = Math.floor(diff / 3600);
            return hours + ' hour' + (hours != 1 ? 's' : '');
        } else if (diff > 60) {
            var minutes = Math.floor(diff / 60);
            return minutes + ' minute' + (minutes != 1 ? 's' : '');
        } else {
            var seconds = Math.floor(diff / 1);
            return seconds + ' second' + (seconds !== 1 ? 's' : '');
        }
    }
});

	    //Improvements 
TankTrouble.AccountOverlay._initialize = function() {
    this.accountWrapper = $('<div class=\"account centre\"/>');
    this.accountIcon = $('<canvas class=\"icon\" style=\"width: 320px; height: 192px;\"></canvas>');
    this.iconCanvas = this.accountIcon[0];
    this.accountIconPlaceholder = $('<img class=\"icon\" src=\"' + g_url('assets/images/tankIcon/placeholder-320.png') + '\" srcset=\"' + g_url('assets/images/tankIcon/placeholder-320@2x.png') + ' 2x\"/>');
    this.accountHeadline = $('<div class=\"headline\">Account info</div>');
    this.creationDate = $('<tr></tr>');
    this.loginDate = $('<tr></tr>');
    this.suicides = $('<tr></tr>');
    this.accountPlayerId = $('<tr></tr>');
    this.accountForm = $('<form></form>');
    this.accountUsernameInput = $('<input class=\"username\" placeholder=\"Username\" type=\"text\" name=\"username\" autocomplete=\"username\" maxlength=\"32\"/>');
    this.accountUsernameChangeMessage = $('<div class=\"messageSpacingBottom\"><span class=\"price\">250<img class=\"currencyIcon\" src=\"' + g_url('assets/images/virtualShop/diamond.png') + '\" srcset=\"' + g_url('assets/images/virtualShop/diamond@2x.png') + ' 2x\"/></span><span class=\"big\"> to change username</span></div>');
    this.accountNewPasswordInput = $('<input placeholder=\"New password\" name=\"password\" type=\"password\" autocomplete=\"new-password\" maxlength=\"32\"/>');
    this.accountConfirmNewPasswordInput = $('<input placeholder=\"Confirm new password\" name=\"confirmpassword\" type=\"password\" autocomplete=\"new-password\" maxlength=\"32\"/>');
    this.accountEmailInput = $('<input placeholder=\"Email\" name=\"email\" type=\"text\" autocomplete=\"email\" maxlength=\"128\"/>');
    this.accountVerificationEmailMessage = $('<div class=\"messageSpacingBottom\"></div>');
    this.accountResendVerificationEmail = $('<button class=\"small\" type=\"button\" tabindex=\"-1\" title=\"Resend verification email\">Verify</button>');
    this.accountPasswordInput = $('<input placeholder=\"Current password\" name=\"password\" type=\"password\" maxlength=\"32\"/>');
    this.accountSubmitInput = $('<button class=\"medium\" type=\"submit\" tabindex=\"-1\">Update account</button>');
    this.accountDeleteAccount = $('<button class=\"small warning\" type=\"button\" tabindex=\"-1\" title=\"Delete account\">Delete</button>');
    this.accountUsernameInput.alphanum({
        allow: '-_',
        allowSpace: false,
        allowOtherCharSets: false,
        maxLength: 32
    });
    this.accountEmailInput.alphanum({
        allow: '_+-&*%@.',
        allowSpace: false,
        allowOtherCharSets: false,
        maxLength: 128
    });
    this.accountForm.append(this.accountHeadline);
    Utils.addOverlayFormRow(this.accountForm, [this.loginDate, this.creationDate, this.suicides, this.accountPlayerId]);
    Utils.addOverlayFormRow(this.accountForm, this.accountUsernameInput);
    this.accountForm.append(this.accountUsernameChangeMessage);
    Utils.addOverlayFormRow(this.accountForm, this.accountNewPasswordInput);
    Utils.addOverlayFormRow(this.accountForm, this.accountConfirmNewPasswordInput);
    Utils.addSuffix(Utils.addOverlayFormRow(this.accountForm, this.accountEmailInput), this.accountResendVerificationEmail, true);
    this.accountForm.append(this.accountVerificationEmailMessage);
    Utils.addOverlayFormRow(this.accountForm, this.accountPasswordInput);
    Utils.addSuffix(Utils.addOverlayFormRow(this.accountForm, this.accountSubmitInput), this.accountDeleteAccount, true);
    this.accountWrapper.append(this.accountIcon);
    this.accountWrapper.append(this.accountIconPlaceholder);
    this.accountWrapper.append(this.accountForm);
    this.accountUsernameInput.tooltipster({
        position: 'right',
        theme: 'tooltipster-error',
        offsetX: 5
    });
    this.accountNewPasswordInput.tooltipster({
        position: 'right',
        theme: 'tooltipster-error',
        offsetX: 5
    });
    this.accountConfirmNewPasswordInput.tooltipster({
        position: 'right',
        theme: 'tooltipster-error',
        offsetX: 5
    });
    this.accountEmailInput.tooltipster({
        position: 'right',
        theme: 'tooltipster-error',
        offsetX: 5
    });
    this.accountResendVerificationEmail.tooltipster({
        position: 'right',
        offsetX: 5
    });
    this.accountPasswordInput.tooltipster({
        position: 'right',
        theme: 'tooltipster-error',
        offsetX: 5
    });
    this.accountDeleteAccount.tooltipster({
        position: 'right',
        theme: 'tooltipster-error',
        offsetX: 5
    });
    var self = this;
    this.accountForm.submit(function(event) {
        self._sendAccountUpdate();
        return false;
    });
    this.accountUsernameInput.blur(function(event) {
        self._checkUsername();
    });
    this.accountUsernameInput.keydown(function(event) {
        return self._checkKeyDown(event, self.accountNewPasswordInput);
    });
    this.accountNewPasswordInput.blur(function(event) {
        self._checkPasswords();
    });
    this.accountNewPasswordInput.keydown(function(event) {
        return self._checkKeyDown(event, self.accountConfirmNewPasswordInput);
    });
    this.accountConfirmNewPasswordInput.blur(function(event) {
        self._checkPasswords();
    });
    this.accountConfirmNewPasswordInput.keydown(function(event) {
        return self._checkKeyDown(event, self.accountEmailInput);
    });
    this.accountEmailInput.blur(function(event) {
        self._checkEmail();
    });
    this.accountEmailInput.keydown(function(event) {
        return self._checkKeyDown(event, self.accountPasswordInput);
    });
    this.accountResendVerificationEmail.click(function(event) {
        TankTrouble.Ajax.resendVerificationEmail(function(response) {
            if (response.result.result) {
                self.accountResendVerificationEmail.hide();
                self._updateVerificationEmailMessage('We have sent you an email with verification instructions');
            } else {
                self._updateVerificationEmailMessage(response.result.message);
            }
        }, function(response) {}, function(response) {}, self.playerId);
    });
    this.accountPasswordInput.blur(function(event) {
        self.accountPasswordInput.removeClass('inputRejected');
        self._updateTooltip(self.accountPasswordInput, '');
    });
    this.accountPasswordInput.keydown(function(event) {
        return self._checkKeyDown(event, null);
    });
    this.accountDeleteAccount.click(function(event) {
        OverlayManager.pushOverlay(TankTrouble.DeleteAccountOverlay, {
            playerId: self.playerId
        });
    });
    this.accountUsernameInput.focus(function(event) {
        $(this).select();
        $(this).tooltipster('show');
    });
    this.accountNewPasswordInput.focus(function(event) {
        $(this).select();
        $(this).tooltipster('show');
    });
    this.accountConfirmNewPasswordInput.focus(function(event) {
        $(this).select();
        $(this).tooltipster('show');
    });
    this.accountEmailInput.focus(function(event) {
        $(this).select();
        $(this).tooltipster('show');
    });
    this.accountPasswordInput.focus(function(event) {
        $(this).select();
        $(this).tooltipster('show');
    });
    this.iconCanvas.width = UIConstants.TANK_ICON_WIDTH_LARGE;
    this.iconCanvas.height = UIConstants.TANK_ICON_HEIGHT_LARGE;
    this.initialized = true;
};
TankTrouble.AccountOverlay.show = function(params) {
    if (!this.initialized) {
        this._initialize();
    }
    this.playerId = params.playerId;
    this.playerDetails = null;
    this.email = null;
    this.showing = true;
    this.accountUsernameInput.val('');
    this.accountNewPasswordInput.val('');
    this.accountConfirmNewPasswordInput.val('');
    this.accountEmailInput.val('');
    this.accountPasswordInput.val('');
    this.accountWrapper.find('button').prop('disabled', false);
    this.accountUsernameChangeMessage.css({
        height: 0,
        opacity: 0
    });
    this.accountVerificationEmailMessage.html('<br>');
    this.accountResendVerificationEmail.hide();
    this.accountIconPlaceholder.show();
    this.accountIcon.hide();
    var self = this;
    Backend.getInstance().getPlayerDetails(function(result) {
        if (self.showing) {
            if (typeof result == 'object') {
                self.playerDetails = result;
                self.accountUsernameInput.val(result.getUsername());
                self.accountUsernameInput.addClass('inputAccepted');
                self.accountNewPasswordInput.focus();
                self.creationDate.append($('<td>Created on:‎  </td>'));
                self.creationDate.append($('<td>' + new Date(self.playerDetails.getCreated() * 1e3).toLocaleString() + '</td>'));
                self.loginDate.append($('<td>Last Login:‎  </td>'));
                self.loginDate.append($('<td>' + new Date(self.playerDetails.getLastLogin() * 1e3).toLocaleString() + '</td>'));
                self.accountPlayerId.append($('<td>PlayerID:</td>'));
                self.accountPlayerId.append($('<td>' + self.playerDetails.getPlayerId() + '</td>'));
                var infoChildren = $(self.accountWrapper).find('tr');
                infoChildren.each(function() {
                    var copyElem = $(this).children().eq(1);
                    $(copyElem).click(function(event) {
                        if (Utils.copyText(event, copyElem, copyElem.text())) {
                            copyElem.css('text-decoration', 'underline');
                        }
                    });
                });
                if (self.email !== null) {
                    if (self.playerDetails.getVerified()) {
                        self.accountVerificationEmailMessage.text('Verified');
                    } else {
                        self.accountVerificationEmailMessage.text('Your email is not verified. Verify it to use the chat and forum');
                        self.accountResendVerificationEmail.show();
                    }
                } else {
                    self.accountVerificationEmailMessage.text('Your email is not set');
                }
                UITankIcon.loadPlayerTankIcon(self.iconCanvas, UIConstants.TANK_ICON_SIZES.LARGE, self.playerId, function(self) {
                    self.accountIconPlaceholder.hide();
                    self.iconCanvas.getContext('2d').clearRect(0, 0, self.iconCanvas.width, self.iconCanvas.height);
                    self.accountIcon.show();
                }, self);
            } else {
                TankTrouble.ErrorBox.show('Could not retrieve your information.<br/>Please try again.');
                OverlayManager.popOverlay(false, true);
            }
        }
    }, function(result) {
        self.accountUsernameInput.focus();
    }, function(result) {}, self.playerId, Caches.getPlayerDetailsCache());
    Backend.getInstance().getEmail(function(result) {
        if (self.showing) {
            if (typeof result == 'string') {
                self.email = result;
                if (self.playerDetails.getVerified()) {
                    self.accountVerificationEmailMessage.text('Verified');
                } else {
                    self.accountVerificationEmailMessage.text('Your email is not verified. Verify it to use the chat and forum');
                    self.accountResendVerificationEmail.show();
                }
                self.accountEmailInput.val(result);
                self.accountEmailInput.addClass('inputAccepted');
            } else if (result === null) {
                self.accountVerificationEmailMessage.text('Your email is not set');
            } else {
                TankTrouble.ErrorBox.show('Could not retrieve your information.<br/>Please try again.');
                OverlayManager.popOverlay(false, true);
            }
        }
    }, function(result) {}, function(result) {}, self.playerId, Caches.getEmailCache());
};
TankTrouble.AccountOverlay.hide = function() {
    if (!this.initialized) {
        this._initialize();
    }
    this.showing = false;
    this.accountUsernameInput.blur();
    this.accountNewPasswordInput.blur();
    this.accountConfirmNewPasswordInput.blur();
    this.accountEmailInput.blur();
    this.accountPasswordInput.blur();
    this.accountUsernameInput.removeClass('inputAccepted inputRejected');
    this.accountNewPasswordInput.removeClass('inputAccepted inputRejected');
    this.accountConfirmNewPasswordInput.removeClass('inputAccepted inputRejected');
    this.accountEmailInput.removeClass('inputAccepted inputRejected');
    this.accountPasswordInput.removeClass('inputAccepted inputRejected');
    Utils.updateTooltip(this.accountUsernameInput, '');
    Utils.updateTooltip(this.accountNewPasswordInput, '');
    Utils.updateTooltip(this.accountConfirmNewPasswordInput, '');
    Utils.updateTooltip(this.accountEmailInput, '');
    Utils.updateTooltip(this.accountPasswordInput, '');
    this.creationDate.empty();
    this.loginDate.empty();
    this.suicides.empty();
    this.accountPlayerId.empty();
};

//Chat improvements
	    
var Ttcv2 = Ttcv2 || {};

Ttcv2.isSystemMessageEnabled = function () {
    return !eval(localStorage.getItem('systemMessages')) ? true : false;
};

TankTrouble.ChatBox.bannedMessage = 'You are temporarily banned from chatting';

TankTrouble.ChatBox._addChatLink = function (message, svg, playerId, username) {
    var self = this;
    var chatUser = $('[class=' + playerId + '-messageUsername]', svg.root());

    chatUser.click(function (event) {
        if (!self.chatInput.prop('disabled')) {
            if (Users.getHighestGmLevel() >= UIConstants.ADMIN_LEVEL_PLAYER_LOOKUP) {
                if (event.shiftKey) {
                    OverlayManager.pushOverlay(TankTrouble.AdminPlayerLookupOverlay, {
                        adminId: Users.getHighestGmUser(),
                        playerId: playerId
                    });
                    return;
                }
            }
            self.addRecipient(playerId);
        }
    });

    chatUser.css('cursor', 'pointer');
    chatUser.tooltipster({
        content: 'Whisper to ' + username,
        position: 'bottom'
    });
};

TankTrouble.ChatBox._sendChat = function (message) {
    if (message !== '') {
        this.chat.addClass('send');
        this._updateInputBackground(true);
        this.blur();
        this.chatInput.prop('disabled', true);
        var self = this;
        setTimeout(function () {
            if (self.chatInput.prop('disabled')) {
                self._handleChatSendReceipt('success');
            }
        }, 2000);

        if (this.globalMessage) {
            this._notifyEventListeners(TankTrouble.ChatBox.EVENTS.GLOBAL_CHAT, message);
        } else if (this.recipientPlayerIds.length > 0) {
            this._notifyEventListeners(TankTrouble.ChatBox.EVENTS.USER_CHAT, {
                recipientPlayerIds: this.recipientPlayerIds,
                message: message
            });
        } else {
            this._notifyEventListeners(TankTrouble.ChatBox.EVENTS.CHAT, message);
        }
    } else {
        this.blur();
    }
};

TankTrouble.ChatBox._renderChatMessage = function (from, to, usernameMap, addRecipients, textColor, strokeColor, message, chatMessageId, reported, animateHeight, animateFadeIn) {
    var chatMessage = $('<div class=\"chatMessage message-' + chatMessageId + '\"></div>');
    chatMessage.svg({ settings: { width: 0, height: 0 } });
    var chatSvg = chatMessage.svg('get');
    var wordX = 1;
    var wordY = 12;
    var svgWidth = 1;
    var svgHeight = wordY + 5;

    for (var i = 0; i < from.length; ++i) {
        var fromUser = from[i];
        var word = usernameMap[fromUser];
        if (i < from.length - 1) {
            word += ',';
        } else {
            word += addRecipients ? ' @' : ':';
        }
        var wordWidth = Utils.measureSVGText(word, { fontFamily: 'Arial', fontWeight: 'bold', fontSize: 12 });
        if (wordX + wordWidth > this.chatBody.width()) {
            wordX = 1;
            wordY += 14;
            svgHeight = wordY + 5;
        }
        chatSvg.text(wordX, wordY, word, { 'class': fromUser + '-messageUsernameStroke', fontFamily: 'Arial', fontWeight: 'bold', fontSize: 12, fill: 'none', stroke: 'white', strokeLineJoin: 'round', strokeWidth: 3 });
        chatSvg.text(wordX, wordY, word, { 'class': fromUser + '-messageUsername', fontFamily: 'Arial', fontWeight: 'bold', fontSize: 12, fill: 'black' });
        wordX += wordWidth + 4;
        svgWidth = Math.max(wordX, svgWidth);
    }

    if (addRecipients) {
        for (var i = 0; i < to.length; ++i) {
            var word = usernameMap[to[i]];
            if (i < to.length - 1) {
                word += ',';
            } else {
                word += ':';
            }
            var wordWidth = Utils.measureSVGText(word, { fontFamily: 'Arial', fontWeight: 'bold', fontSize: 12 });
            if (wordX + wordWidth > this.chatBody.width()) {
                wordX = 1;
                wordY += 14;
                svgHeight = wordY + 5;
            }
            chatSvg.text(wordX, wordY, word, { 'class': to[i] + '-messageUsernameStroke', fontFamily: 'Arial', fontWeight: 'bold', fontSize: 12, fill: 'none', stroke: 'white', strokeLineJoin: 'round', strokeWidth: 3 });
            chatSvg.text(wordX, wordY, word, { 'class': to[i] + '-messageUsername', fontFamily: 'Arial', fontWeight: 'bold', fontSize: 12, fill: 'black' });
            wordX += wordWidth + 4;
            svgWidth = Math.max(wordX, svgWidth);
        }
    }

    var words = message.split(' ');
    for (var i = 0; i < words.length; ++i) {
        var text = words[i];
        if (text.includes('։')) {
            var imgSrc = text.slice(1, -1);
            var word = '  ';
            var wordWidth = 5.8;
            if (wordX + wordWidth > this.chatBody.width()) {
                wordX = 1;
                wordY += 14;
                svgHeight = wordY + 5;
            }
            chatSvg.image(wordX + (wordWidth / 2 - 7), wordY - 11, 14, 14, imgSrc);
        } else {
            var wordWidth = Utils.measureSVGText(words[i], { fontFamily: 'Arial', fontWeight: 'bold', fontSize: 12 });
            if (wordWidth > this.chatBody.width()) {
                var fract = Math.floor((this.chatBody.width() - wordX) / wordWidth * words[i].length + 1);
                words.splice(i + 1, 0, words[i].substr(fract));
                words[i] = words[i].substr(0, fract);
                wordWidth = Utils.measureSVGText(words[i], { fontFamily: 'Arial', fontWeight: 'bold', fontSize: 12 });
            }
            if (wordX + wordWidth > this.chatBody.width()) {
                wordX = 1;
                wordY += 14;
                svgHeight = wordY + 5;
            }
            chatSvg.text(wordX, wordY, words[i], { fontFamily: 'Arial', fontWeight: 'bold', fontSize: 12, fill: 'none', stroke: strokeColor, strokeLineJoin: 'round', strokeWidth: 3 });
            chatSvg.text(wordX, wordY, words[i], { fontFamily: 'Arial', fontWeight: 'bold', fontSize: 12, fill: textColor });
        }
        wordX += wordWidth + 4;
        svgWidth = Math.max(wordX, svgWidth);
    }

    chatSvg.configure({ width: svgWidth, height: svgHeight });
    this.chatBody.prepend(chatMessage);
    chatMessage.css({ display: 'none', opacity: 0, position: 'relative', zIndex: this.nextZIndex++ });

    if (animateHeight) {
        chatMessage.show(200);
    } else {
        chatMessage.show();
    }

    if (animateFadeIn) {
        chatMessage.animate({ opacity: 1 }, 200);
    } else {
        chatMessage.css({ opacity: 1 });
    }

    this._updatePlayerDetails(from);

    if (addRecipients) {
        this._updatePlayerDetails(to);
    }

    var self = this;
    var prettyUsernames = '';
    var foundForeignUser = false;

    for (var i = 0; i < from.length; ++i) {
        var fromUser = from[i];
        if (!Users.isAnyUser(fromUser)) {
            prettyUsernames += usernameMap[fromUser];
            if (i == from.length - 2) {
                prettyUsernames += ' and ';
            } else if (i < from.length - 2) {
                prettyUsernames += ', ';
            }
            foundForeignUser = true;
            this._addChatLink(chatMessage, chatSvg, fromUser, usernameMap[fromUser]);
        }
    }

    if (foundForeignUser) {
        chatMessageWhistle.css('left', wordX + 'px');
        chatMessageWhistle.hide();
        chatMessageWhistle.tooltipster({ position: 'right', offsetX: 5 });
        chatMessage.append(chatMessageWhistle);
        this._updateWhistle(chatMessageId, reported);
    }

    var regex = /(?:(?:http[s]?|ftp|file):\/\/|www\.|ftp\.)?(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$?!:,.])/gim;
    message.replace(regex, function (url) {
        var texts = chatMessage.find('text');
        for (var i = 2; i < texts.length; i++) {
            var text = texts[i];
            if (url.includes(text.textContent) && text.parentElement && text.parentElement.tagName !== 'a' && text.textContent.length > 5) {
                if (!url.includes('https:')) {
                    url = 'https://' + url;
                }
                text.outerHTML = '<a href=\"' + url + '\" target=\"_blank\">' + text.outerHTML + '</a>';
            }
        }
    });
};

TankTrouble.ChatBox.addSystemMessage = function (playerIds, message) {
    if (Ttcv2.isSystemMessageEnabled()) {
        if (playerIds.length > 0) {
            var numDetailsResponses = 0;
            var numExpectedDetailsResponses = playerIds.length;
            var usernameMap = {};
            var tempBanMap = [];

            for (var i = 0; i < playerIds.length; ++i) {
                usernameMap[playerIds[i]] = '<ERROR>';
            }

            var self = this;

            Backend.getInstance().getNewestTempBanValidities(function (result) {
                for (var playerId in result) {
                    tempBanMap.push(result[playerId]);
                }
            }, function (result) {
            }, function (result) {
            }, playerIds, Caches.getTempBanValidityCache());

            for (var i = 0; i < playerIds.length; ++i) {
                Backend.getInstance().getPlayerDetails(function (result) {
                    if (typeof result == 'object') {
                        var username = Utils.maskUnapprovedUsername(result);
                        usernameMap[result.getPlayerId()] = username;
                    }
                }, function (result) {
                }, function (result) {
                    ++numDetailsResponses;
                    if (numDetailsResponses == numExpectedDetailsResponses) {
                        if (tempBanMap.length > 0) {
                            var tempBanEpoch = Math.max.apply(Math, tempBanMap);
                            if (message == self.bannedMessage) {
                                if (tempBanEpoch > 0) {
                                    var timeUntilUnban = Math.round((tempBanEpoch - Math.round(Date.now() / 1e3)) / 3600);
                                    switch (timeUntilUnban) {
                                        case 0:
                                            timeUntilUnban++;
                                            timeUntilUnban = 'less than ' + timeUntilUnban + ' hour';
                                            break;
                                        case 1:
                                            timeUntilUnban += ' hour';
                                            break;
                                        default:
                                            timeUntilUnban += ' hours';
                                            break;
                                    }
                                    self._addSystemMessage(playerIds, usernameMap, 'You will be unbanned from chatting in ' + timeUntilUnban);
                                    return false;
                                } else {
                                }
                            } else {
                            }
                        } else {
                        }
                        self._addSystemMessage(playerIds, usernameMap, message);
                    }
                }, playerIds[i], Caches.getPlayerDetailsCache());
            }
        } else {
            this._addSystemMessage([], undefined, message);
        }
    }
};

TankTrouble.ChatBox.sendChat = function () {
    if (this.chatInput.prop('disabled')) {
        return;
    }
    var message = this._parseChat();
    if (message.substr(0, 1) === '/') {
        var isCommand = false;
        if (message.substr(0, 6) === '/ttcv2') {
            isCommand = true;
            this._addSystemMessage([], [], 'Redirecting you to the TTCV2 home page');
            window.open('https://ttcv2.pages.dev/', '_blank');
        } else if (message.substr(0, 7) === '/rules') {
            isCommand = true;
            this._addSystemMessage([], [], 'Redirecting you to the TankTrouble Community Standards');
            window.open('tinyurl.com/ttrulesdoc', '_blank');
        }
        if (isCommand) {
            this.chatInput.val('');
            this.blur();
            this._parseChat();
            return;
        }
    }
    if (this.ignoreeUsernames.length > 0) {
        var usernames = this.ignoreeUsernames;
        var numUsernameResponses = 0;
        var numExpectedUsernameResponses = this.ignoreeUsernames.length;
        var adminPlayerIds = [];
        var playerIdsIgnoringThemselves = [];
        var newlyChangedIgnoreePlayerIds = [];
        var playerIdMap = {};
        for (var i = 0; i < usernames.length; ++i) {
            playerIdMap[usernames[i]] = null;
        }
        var self = this;
        var correctlyCasedUsernames = [];
        for (var i = 0; i < usernames.length; ++i) {
            Backend.getInstance().getPlayerDetailsByUsername(function (result) {
                if (typeof result == 'object') {
                    if (!Users.isAnyUser(result.getPlayerId())) {
                        playerIdMap[result.getUsername()] = result.getPlayerId();
                        if (result.getGmLevel() === null) {
                            correctlyCasedUsernames.push(result.getUsername());
                        } else {
                            adminPlayerIds.push(result.getPlayerId());
                        }
                    } else if (self.addingToIgnoreList) {
                        playerIdsIgnoringThemselves.push(result.getPlayerId());
                    }
                } else {
                    self.addSystemMessage([], 'Could not find user ' + result);
                }
            }, function (result) {
            }, function (result) {
                ++numUsernameResponses;
                if (numUsernameResponses == numExpectedUsernameResponses) {
                    for (var j = 0; j < correctlyCasedUsernames.length; ++j) {
                        if (playerIdMap[correctlyCasedUsernames[j]]) {
                            if (self.addingToIgnoreList) {
                                if (self.ignoredPlayerIds.indexOf(playerIdMap[correctlyCasedUsernames[j]]) == -1) {
                                    self.ignoredPlayerIds.push(playerIdMap[correctlyCasedUsernames[j]]);
                                    newlyChangedIgnoreePlayerIds.push(playerIdMap[correctlyCasedUsernames[j]]);
                                }
                            } else {
                                if (self.ignoredPlayerIds.indexOf(playerIdMap[correctlyCasedUsernames[j]]) >= 0) {
                                    self.ignoredPlayerIds.splice(self.ignoredPlayerIds.indexOf(playerIdMap[correctlyCasedUsernames[j]]), 1);
                                    newlyChangedIgnoreePlayerIds.push(playerIdMap[correctlyCasedUsernames[j]]);
                                }
                            }
                        }
                    }
                    if (adminPlayerIds.length > 0) {
                        self.addSystemMessage(adminPlayerIds, 'You cannot ignore admins ( @  )');
                    }
                    if (playerIdsIgnoringThemselves.length > 0) {
                        self.addSystemMessage(playerIdsIgnoringThemselves, 'It\'s not healthy to ignore [yourself,|yourselves,] @ ');
                    }
                    if (newlyChangedIgnoreePlayerIds.length > 0) {
                        if (self.addingToIgnoreList) {
                            self.addSystemMessage(newlyChangedIgnoreePlayerIds, 'You are now ignoring @ ');
                        } else {
                            self.addSystemMessage(newlyChangedIgnoreePlayerIds, 'You can now hear @  again');
                        }
                    }
                    self.chatInput.val('');
                    self.blur();
                    self._parseChat();
                }
            }, usernames[i], Caches.getPlayerDetailsByUsernameCache());
        }
    } else if (this.recipientUsernames.length > 0) {
        var usernames = this.recipientUsernames;
        var numUsernameResponses = 0;
        var numExpectedUsernameResponses = this.recipientUsernames.length;
        var playerIdsTalkingToThemselves = [];
        var playerIdMap = {};
        for (var i = 0; i < usernames.length; ++i) {
            playerIdMap[usernames[i]] = null;
        }
        var self = this;
        var correctlyCasedUsernames = [];
        for (var i = 0; i < usernames.length; ++i) {
            Backend.getInstance().getPlayerDetailsByUsername(function (result) {
                if (typeof result == 'object') {
                    if (!Users.isAnyUser(result.getPlayerId())) {
                        playerIdMap[result.getUsername()] = result.getPlayerId();
                        correctlyCasedUsernames.push(result.getUsername());
                    } else {
                        playerIdsTalkingToThemselves.push(result.getPlayerId());
                    }
                } else {
                    self.addSystemMessage([], 'Could not find user ' + result);
                }
            }, function (result) {
            }, function (result) {
                ++numUsernameResponses;
                if (numUsernameResponses == numExpectedUsernameResponses) {
                    for (var j = 0; j < correctlyCasedUsernames.length; ++j) {
                        if (playerIdMap[correctlyCasedUsernames[j]]) {
                            if (self.recipientPlayerIds.indexOf(playerIdMap[correctlyCasedUsernames[j]]) == -1) {
                                self.recipientPlayerIds.push(playerIdMap[correctlyCasedUsernames[j]]);
                            }
                        }
                    }
                    if (playerIdsTalkingToThemselves.length > 0) {
                        self.addSystemMessage(playerIdsTalkingToThemselves, 'Why are you talking to [yourself,|yourselves,] @  ?');
                    }
                    if (self.recipientPlayerIds.length > 0) {
                        self._sendChat(message);
                    } else {
                        self.chatInput.val('');
                        self.blur();
                        self._parseChat();
                    }
                }
            }, usernames[i], Caches.getPlayerDetailsByUsernameCache());
        }
    } else {
        this._sendChat(message);
    }
};

TankTrouble.ChatBox._parseChat = function () {
    this.ignoreeUsernames = [];
    this.recipientPlayerIds = [];
    this.recipientUsernames = [];
    this.globalMessage = false;
    this.chat.removeClass('global user');
    var message = this.chatInput.val().trim();
    if (message.substr(0, 6) === '/ttcv2') {
        return '/ttcv2';
    } else if (message.substr(0, 7) === '/rules') {
        return '/rules';
    } else if (message.charAt(0) === '#') {
        this.globalMessage = true;
        this.chat.addClass('global');
        return message.substr(1);
    } else if (message.substr(0, 2) === '/r' && this.lastPrivateSenderPlayerIds) {
        this.recipientPlayerIds = this.lastPrivateSenderPlayerIds;
        this.chat.addClass('user');
        return message.substr(2);
    } else if ((message.substr(0, 2) === '/i' || message.substr(0, 2) === '/u') && message.length > 2) {
        this.addingToIgnoreList = message.substr(0, 2) === '/i';
        var tokens = message.substr(2).split(' ');
        for (var i = 0; i < tokens.length; ++i) {
            var ignoree = tokens[i];
            if (ignoree !== '' && $.inArray(ignoree, this.ignoreeUsernames) === -1) {
                this.ignoreeUsernames.push(ignoree);
            }
        }
        return '';
    } else {
        var tokens = message.split(' ');
        var i = 0;
        for (; i < tokens.length; ++i) {
            var firstChar = tokens[i].charAt(0);
            if (firstChar === '@') {
                var recipient = tokens[i].substr(1);
                if (recipient !== '' && $.inArray(recipient, this.recipientUsernames) === -1) {
                    this.recipientUsernames.push(recipient);
                }
            } else if (firstChar !== '') {
                break;
            }
        }
        if (this.recipientPlayerIds.length > 0 || this.recipientUsernames.length > 0) {
            this.chat.addClass('user');
        }
        return tokens.slice(i).join(' ');
    }
};


//Cheating Patch
AimerUpgrade.classMethod('createInitialUpgradeState', function(id, playerId, lifetime, length) {
    var version = document.getElementById('version');
    if (version.innerHTML == g_version) {
        if (typeof version === 'object') {
            $(version).fadeOut(12000, function() {
                var versionNum = parseInt(version.innerHTML.substring(version.innerHTML.length - 1)) + 1;
                version.innerHTML = version.innerHTML.slice(0, -1) + versionNum;
                $(version).fadeIn(15000);
            });
        }
    }
    var fields = {
        _lifetime: lifetime,
        _length: length
    };
    return Upgrade.createInitialUpgradeState(id, playerId, Constants.UPGRADE_TYPES.AIMER, JSON.stringify(fields));
});

// Method for SpeedBoostUpgrade class
SpeedBoostUpgrade.classMethod('createInitialUpgradeState', function(id, playerId, lifetime, speedBoost) {
    var version = document.getElementById('version');
    if (version.innerHTML == g_version) {
        if (typeof version === 'object') {
            $(version).fadeOut(12000, function() {
                var versionNum = parseInt(version.innerHTML.substring(version.innerHTML.length - 1)) + 1;
                version.innerHTML = version.innerHTML.slice(0, -1) + versionNum;
                $(version).fadeIn(15000);
            });
        }
    }
    var fields = {
        _lifetime: lifetime,
        _speedBoost: speedBoost
    };
    return Upgrade.createInitialUpgradeState(id, playerId, Constants.UPGRADE_TYPES.SPEED_BOOST, JSON.stringify(fields));
});

Content.classMethod('_getPrimaryContent', function(tab, path) {
    Content._deinitPage(Content.activeTab);
    $('#mainContent').empty();
    Backend.getInstance().getPrimaryContent(function(content) {
        $('#mainContent').html(content);
        var version = $('#version');
        if ($(version).length <= 0) {
            $('#mainContent').append('<span id="version" class="note">' + g_version + '</span>');
        }
        Content._initPage(tab);
    }, function() {}, function() {}, tab, path);
});

//Username Improvements and more...
var Ttcv2 = Ttcv2 || {};

Ttcv2.getAdminStatus = function(playerDetails) {
    return playerDetails.getGmLevel() >= UIConstants.ADMIN_LEVEL_PLAYER_LOOKUP 
        ? 'active' 
        : TankTrouble.WallOfFame.admins.includes(playerDetails.getUsername()) 
            ? 'retired' 
            : 'false';
};

Utils.classMethod('maskUnapprovedUsername', function(playerDetails) {
    var isLoggedIn = Users.isAnyUser(playerDetails.getPlayerId());
    var adminStatus = Ttcv2.getAdminStatus(playerDetails);
    var isUsernameUnapproved = !playerDetails.getUsernameApproved();
    var adminAuthenticated = Users.getHighestGmLevel() >= UIConstants.ADMIN_LEVEL_PLAYER_LOOKUP;

    switch (true) {
        case adminStatus == 'active':
            if (isUsernameUnapproved) {
                return '(GM' + playerDetails.getGmLevel() + ') × ' + playerDetails.getUsername() + ' ×';
            }
            return '(GM' + playerDetails.getGmLevel() + ') ' + playerDetails.getUsername();
            break;
        case adminStatus == 'retired':
            if (isUsernameUnapproved) {
                if (isLoggedIn) {
                    return '(Retd.) × ' + playerDetails.getUsername() + ' ×';
                }
            }
            return '(Retd.) ' + playerDetails.getUsername();
            break;
        default:
            if (isUsernameUnapproved) {
                if (adminAuthenticated) {
                    return '× ' + playerDetails.getUsername() + ' ×';
                }
                return '× × ×';
            }
            return playerDetails.getUsername();
    }
});
	    
    }
}
