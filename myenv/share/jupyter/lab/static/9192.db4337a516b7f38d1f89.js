"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [9192],
  {
    69192: (e, i, $) => {
      $.r(i);
      $.d(i, { mirc: () => m });
      function r(e) {
        var i = {},
          $ = e.split(" ");
        for (var r = 0; r < $.length; ++r) i[$[r]] = true;
        return i;
      }
      var t = r(
        "$! $$ $& $? $+ $abook $abs $active $activecid " +
          "$activewid $address $addtok $agent $agentname $agentstat $agentver " +
          "$alias $and $anick $ansi2mirc $aop $appactive $appstate $asc $asctime " +
          "$asin $atan $avoice $away $awaymsg $awaytime $banmask $base $bfind " +
          "$binoff $biton $bnick $bvar $bytes $calc $cb $cd $ceil $chan $chanmodes " +
          "$chantypes $chat $chr $cid $clevel $click $cmdbox $cmdline $cnick $color " +
          "$com $comcall $comchan $comerr $compact $compress $comval $cos $count " +
          "$cr $crc $creq $crlf $ctime $ctimer $ctrlenter $date $day $daylight " +
          "$dbuh $dbuw $dccignore $dccport $dde $ddename $debug $decode $decompress " +
          "$deltok $devent $dialog $did $didreg $didtok $didwm $disk $dlevel $dll " +
          "$dllcall $dname $dns $duration $ebeeps $editbox $emailaddr $encode $error " +
          "$eval $event $exist $feof $ferr $fgetc $file $filename $filtered $finddir " +
          "$finddirn $findfile $findfilen $findtok $fline $floor $fopen $fread $fserve " +
          "$fulladdress $fulldate $fullname $fullscreen $get $getdir $getdot $gettok $gmt " +
          "$group $halted $hash $height $hfind $hget $highlight $hnick $hotline " +
          "$hotlinepos $ial $ialchan $ibl $idle $iel $ifmatch $ignore $iif $iil " +
          "$inelipse $ini $inmidi $inpaste $inpoly $input $inrect $inroundrect " +
          "$insong $instok $int $inwave $ip $isalias $isbit $isdde $isdir $isfile " +
          "$isid $islower $istok $isupper $keychar $keyrpt $keyval $knick $lactive " +
          "$lactivecid $lactivewid $left $len $level $lf $line $lines $link $lock " +
          "$lock $locked $log $logstamp $logstampfmt $longfn $longip $lower $ltimer " +
          "$maddress $mask $matchkey $matchtok $md5 $me $menu $menubar $menucontext " +
          "$menutype $mid $middir $mircdir $mircexe $mircini $mklogfn $mnick $mode " +
          "$modefirst $modelast $modespl $mouse $msfile $network $newnick $nick $nofile " +
          "$nopath $noqt $not $notags $notify $null $numeric $numok $oline $onpoly " +
          "$opnick $or $ord $os $passivedcc $pic $play $pnick $port $portable $portfree " +
          "$pos $prefix $prop $protect $puttok $qt $query $rand $r $rawmsg $read $readomo " +
          "$readn $regex $regml $regsub $regsubex $remove $remtok $replace $replacex " +
          "$reptok $result $rgb $right $round $scid $scon $script $scriptdir $scriptline " +
          "$sdir $send $server $serverip $sfile $sha1 $shortfn $show $signal $sin " +
          "$site $sline $snick $snicks $snotify $sock $sockbr $sockerr $sockname " +
          "$sorttok $sound $sqrt $ssl $sreq $sslready $status $strip $str $stripped " +
          "$syle $submenu $switchbar $tan $target $ticks $time $timer $timestamp " +
          "$timestampfmt $timezone $tip $titlebar $toolbar $treebar $trust $ulevel " +
          "$ulist $upper $uptime $url $usermode $v1 $v2 $var $vcmd $vcmdstat $vcmdver " +
          "$version $vnick $vol $wid $width $wildsite $wildtok $window $wrap $xor"
      );
      var a = r(
        "abook ajinvite alias aline ame amsg anick aop auser autojoin avoice " +
          "away background ban bcopy beep bread break breplace bset btrunc bunset bwrite " +
          "channel clear clearall cline clipboard close cnick color comclose comopen " +
          "comreg continue copy creq ctcpreply ctcps dcc dccserver dde ddeserver " +
          "debug dec describe dialog did didtok disable disconnect dlevel dline dll " +
          "dns dqwindow drawcopy drawdot drawfill drawline drawpic drawrect drawreplace " +
          "drawrot drawsave drawscroll drawtext ebeeps echo editbox emailaddr enable " +
          "events exit fclose filter findtext finger firewall flash flist flood flush " +
          "flushini font fopen fseek fsend fserve fullname fwrite ghide gload gmove " +
          "gopts goto gplay gpoint gqreq groups gshow gsize gstop gtalk gunload hadd " +
          "halt haltdef hdec hdel help hfree hinc hload hmake hop hsave ial ialclear " +
          "ialmark identd if ignore iline inc invite iuser join kick linesep links list " +
          "load loadbuf localinfo log mdi me menubar mkdir mnick mode msg nick noop notice " +
          "notify omsg onotice part partall pdcc perform play playctrl pop protect pvoice " +
          "qme qmsg query queryn quit raw reload remini remote remove rename renwin " +
          "reseterror resetidle return rlevel rline rmdir run ruser save savebuf saveini " +
          "say scid scon server set showmirc signam sline sockaccept sockclose socklist " +
          "socklisten sockmark sockopen sockpause sockread sockrename sockudp sockwrite " +
          "sound speak splay sreq strip switchbar timer timestamp titlebar tnick tokenize " +
          "toolbar topic tray treebar ulist unload unset unsetall updatenl url uwho " +
          "var vcadd vcmd vcrem vol while whois window winhelp write writeint if isalnum " +
          "isalpha isaop isavoice isban ischan ishop isignore isin isincs isletter islower " +
          "isnotify isnum ison isop isprotect isreg isupper isvoice iswm iswmcs " +
          "elseif else goto menu nicklist status title icon size option text edit " +
          "button check radio box scroll list combo link tab item"
      );
      var n = r("if elseif else and not or eq ne in ni for foreach while switch");
      var s = /[+\-*&%=<>!?^\/\|]/;
      function o(e, i, $) {
        i.tokenize = $;
        return $(e, i);
      }
      function l(e, i) {
        var $ = i.beforeParams;
        i.beforeParams = false;
        var r = e.next();
        if (/[\[\]{}\(\),\.]/.test(r)) {
          if (r == "(" && $) i.inParams = true;
          else if (r == ")") i.inParams = false;
          return null;
        } else if (/\d/.test(r)) {
          e.eatWhile(/[\w\.]/);
          return "number";
        } else if (r == "\\") {
          e.eat("\\");
          e.eat(/./);
          return "number";
        } else if (r == "/" && e.eat("*")) {
          return o(e, i, c);
        } else if (r == ";" && e.match(/ *\( *\(/)) {
          return o(e, i, d);
        } else if (r == ";" && !i.inParams) {
          e.skipToEnd();
          return "comment";
        } else if (r == '"') {
          e.eat(/"/);
          return "keyword";
        } else if (r == "$") {
          e.eatWhile(/[$_a-z0-9A-Z\.:]/);
          if (t && t.propertyIsEnumerable(e.current().toLowerCase())) {
            return "keyword";
          } else {
            i.beforeParams = true;
            return "builtin";
          }
        } else if (r == "%") {
          e.eatWhile(/[^,\s()]/);
          i.beforeParams = true;
          return "string";
        } else if (s.test(r)) {
          e.eatWhile(s);
          return "operator";
        } else {
          e.eatWhile(/[\w\$_{}]/);
          var l = e.current().toLowerCase();
          if (a && a.propertyIsEnumerable(l)) return "keyword";
          if (n && n.propertyIsEnumerable(l)) {
            i.beforeParams = true;
            return "keyword";
          }
          return null;
        }
      }
      function c(e, i) {
        var $ = false,
          r;
        while ((r = e.next())) {
          if (r == "/" && $) {
            i.tokenize = l;
            break;
          }
          $ = r == "*";
        }
        return "comment";
      }
      function d(e, i) {
        var $ = 0,
          r;
        while ((r = e.next())) {
          if (r == ";" && $ == 2) {
            i.tokenize = l;
            break;
          }
          if (r == ")") $++;
          else if (r != " ") $ = 0;
        }
        return "meta";
      }
      const m = {
        name: "mirc",
        startState: function () {
          return { tokenize: l, beforeParams: false, inParams: false };
        },
        token: function (e, i) {
          if (e.eatSpace()) return null;
          return i.tokenize(e, i);
        },
      };
    },
  },
]);
