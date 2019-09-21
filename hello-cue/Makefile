.PHONY: run
run:
	cue export hello.cue
	cue eval emit.cue
	cue eval -i bottom.cue
	cue eval module_example.cue
	cue eval -i -c cycle.cue


